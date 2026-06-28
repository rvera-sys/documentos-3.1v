const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
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
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query;
  const { filename } = req.body || {};

  try {
    const { data: doc } = await supabase
      .from('document_instances')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.sub)
      .single();

    if (!doc) return res.status(404).json({ error: 'Document not found' });

    try { await supabase.from('audit_log').insert({ user_id: user.sub, action: 'export_pdf', document_id: id, details: { filename } }); } catch {}

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
