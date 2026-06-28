const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function verifyAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.replace('Bearer ', '');
  try { return jwt.verify(token, process.env.JWT_SECRET); }
  catch (e) { return null; }
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const { data: doc } = await supabase.from('document_instances').select('*').eq('id', id).eq('user_id', user.sub).single();
      if (!doc) return res.status(404).json({ error: 'Document not found' });
      return res.status(200).json(doc);
    }

    if (req.method === 'PUT') {
      const { title, form_data, selected_clauses, custom_clauses } = req.body;
      const { data: doc } = await supabase.from('document_instances').select('version').eq('id', id).eq('user_id', user.sub).single();
      if (!doc) return res.status(404).json({ error: 'Document not found' });

      const newVersion = doc.version + 1;
      await supabase.from('document_instances').update({ title: title, form_data: form_data, version: newVersion, updated_at: new Date().toISOString() }).eq('id', id);

      await supabase.from('draft_history').insert({ document_id: id, snapshot: { form_data, selected_clauses, custom_clauses }, version_number: newVersion, action: 'edit', edited_by: user.sub }).catch(() => {});
      await supabase.from('audit_log').insert({ user_id: user.sub, action: 'update_document', document_id: id, details: { new_version: newVersion } }).catch(() => {});

      return res.status(200).json({ success: true, message: 'Document saved', version: newVersion });
    }

    if (req.method === 'DELETE') {
      const { data: doc } = await supabase.from('document_instances').select('id').eq('id', id).eq('user_id', user.sub).single();
      if (!doc) return res.status(404).json({ error: 'Document not found' });

      await supabase.from('document_instances').update({ deleted_at: new Date().toISOString() }).eq('id', id);
      await supabase.from('audit_log').insert({ user_id: user.sub, action: 'delete_document', document_id: id }).catch(() => {});

      return res.status(200).json({ success: true, message: 'Document deleted' });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
