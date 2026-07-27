const { supabase, setCors, verifyAuth, limitar } = require('../_lib');

module.exports = async (req, res) => {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  try {
    if (req.method === 'GET') {
      const { state, q } = req.query;
      let query = supabase
        .from('document_instances')
        .select('id, title, template_id, state, version, created_at, updated_at, document_templates(name)')
        .eq('user_id', user.sub)
        .is('deleted_at', null)
        .order('updated_at', { ascending: false })
        .limit(200);

      if (state && state !== 'all') query = query.eq('state', state);
      if (q) query = query.ilike('title', `%${q}%`);

      const { data, error } = await query;
      if (error) return res.status(500).json({ error: error.message });
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST') {
      const { template_id, title, form_data, selected_clauses } = req.body || {};
      if (!template_id || !title) return res.status(400).json({ error: 'Faltan template_id o title' });
      limitar(selected_clauses);

      // El template debe existir en document_templates (FK). Si no está, se crea.
      const { data: tpl } = await supabase
        .from('document_templates').select('id').eq('id', template_id).maybeSingle();
      if (!tpl) {
        await supabase.from('document_templates')
          .insert({ id: template_id, name: title, category: 'otros' });
      }

      const { data: newDoc, error } = await supabase
        .from('document_instances')
        .insert({
          user_id: user.sub,
          template_id,
          title,
          form_data: form_data || {},
          selected_clauses: selected_clauses || [],
          state: 'draft',
          version: 1
        })
        .select().single();

      if (error) return res.status(500).json({ error: error.message });

      await supabase.from('draft_history').insert({
        document_id: newDoc.id,
        snapshot: { form_data: form_data || {}, selected_clauses: selected_clauses || [] },
        version_number: 1, action: 'create', edited_by: user.sub
      });
      await supabase.from('audit_log').insert({
        user_id: user.sub, action: 'create_document', document_id: newDoc.id,
        details: { template_id, title }
      });

      return res.status(201).json({ success: true, document: newDoc });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
};
