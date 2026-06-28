const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
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
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query;

  try {
    const { data: doc } = await supabase
      .from('document_instances')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.sub)
      .single();

    if (!doc) return res.status(404).json({ error: 'Document not found' });

    const { data: history } = await supabase
      .from('draft_history')
      .select('id, version_number, action, created_at, edited_by')
      .eq('document_id', id)
      .order('created_at', { ascending: false });

    return res.status(200).json(history || []);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
