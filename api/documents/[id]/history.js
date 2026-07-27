const { supabase, setCors, verifyAuth } = require('../../_lib');

module.exports = async (req, res) => {
  setCors(req, res, 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  const { id } = req.query;

  const { data: doc } = await supabase.from('document_instances')
    .select('id, version').eq('id', id).eq('user_id', user.sub).maybeSingle();
  if (!doc) return res.status(404).json({ error: 'Documento no encontrado' });

  try {
    if (req.method === 'GET') {
      const { data } = await supabase.from('draft_history')
        .select('id, version_number, action, created_at, snapshot')
        .eq('document_id', id).order('version_number', { ascending: false }).limit(50);
      return res.status(200).json(data || []);
    }

    // POST = restaurar una versión anterior (crea una nueva versión, no pisa historial)
    if (req.method === 'POST') {
      const { version_number } = req.body || {};
      const { data: snap } = await supabase.from('draft_history')
        .select('snapshot').eq('document_id', id).eq('version_number', version_number).maybeSingle();
      if (!snap) return res.status(404).json({ error: 'Versión inexistente' });

      const nueva = doc.version + 1;
      await supabase.from('document_instances').update({
        title: snap.snapshot.title,
        form_data: snap.snapshot.form_data,
        selected_clauses: snap.snapshot.selected_clauses,
        version: nueva,
        updated_at: new Date().toISOString()
      }).eq('id', id);

      await supabase.from('draft_history').insert({
        document_id: id, snapshot: snap.snapshot, version_number: nueva,
        action: 'restore_v' + version_number, edited_by: user.sub
      });

      return res.status(200).json({ success: true, version: nueva });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
