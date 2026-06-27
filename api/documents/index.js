const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function verifyAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.replace('Bearer ', '');
  try { return jwt.verify(token, process.env.JWT_SECRET); }
  catch (e) { return null; }
}

module.exports = async (req, res) => {
  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  try {
    if (req.method === 'GET') {
      const { state = 'draft' } = req.query;
      const { data: documents } = await supabase
        .from('document_instances')
        .select('id, title, template_id, state, version, created_at, updated_at, document_templates(name)')
        .eq('user_id', user.sub)
        .eq('state', state)
        .is('deleted_at', null)
        .order('updated_at', { ascending: false });
      return res.status(200).json(documents || []);
    }

    if (req.method === 'POST') {
      const { template_id, title, form_data } = req.body;
      if (!template_id || !title) return res.status(400).json({ error: 'Missing required fields' });

      const { data: newDoc } = await supabase
        .from('document_instances')
        .insert({ user_id: user.sub, template_id: template_id, title: title, form_data: form_data || {}, state: 'draft', version: 1 })
        .select()
        .single();

      await supabase.from('audit_log').insert({ user_id: user.sub, action: 'create_document', document_id: newDoc.id, details: { template_id, title } }).catch(() => {});

      return res.status(201).json({ success: true, document: newDoc });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
