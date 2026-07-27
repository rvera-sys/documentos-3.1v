const { supabase, setCors, verifyAuth, limitar } = require('../_lib');

module.exports = async (req, res) => {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const { id } = req.query;

  try {
    const { data: doc } = await supabase
      .from('document_instances')
      .select('id, version, state')
      .eq('id', id).eq('user_id', user.sub).is('deleted_at', null).maybeSingle();

    if (!doc) return res.status(404).json({ error: 'Documento no encontrado' });

    if (req.method === 'GET') {
      const { data } = await supabase.from('document_instances')
        .select('*').eq('id', id).single();
      return res.status(200).json(data);
    }

    if (req.method === 'PUT') {
      if (doc.state === 'final') {
        return res.status(409).json({ error: 'El documento está cerrado y no puede editarse' });
      }
      const { title, form_data, selected_clauses, state } = req.body || {};
      limitar(selected_clauses);
      const newVersion = doc.version + 1;

      const patch = { version: newVersion, updated_at: new Date().toISOString() };
      if (title !== undefined) patch.title = title;
      if (form_data !== undefined) patch.form_data = form_data;
      if (selected_clauses !== undefined) patch.selected_clauses = selected_clauses;
      if (state !== undefined) patch.state = state;

      const { error } = await supabase.from('document_instances').update(patch).eq('id', id);
      if (error) return res.status(500).json({ error: error.message });

      await supabase.from('draft_history').insert({
        document_id: id,
        snapshot: { title, form_data, selected_clauses },
        version_number: newVersion, action: 'edit', edited_by: user.sub
      });
      await supabase.from('audit_log').insert({
        user_id: user.sub, action: 'update_document', document_id: id,
        details: { new_version: newVersion, clausulas: (selected_clauses || []).length }
      });

      return res.status(200).json({ success: true, version: newVersion });
    }

    if (req.method === 'DELETE') {
      await supabase.from('document_instances')
        .update({ deleted_at: new Date().toISOString() }).eq('id', id);
      await supabase.from('audit_log').insert({
        user_id: user.sub, action: 'delete_document', document_id: id
      });
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
