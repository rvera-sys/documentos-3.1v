const { supabase, setCors, verifyAuth } = require('../../_lib');

module.exports = async (req, res) => {
  setCors(req, res, 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const user = verifyAuth(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { id } = req.query;
  const { filename } = req.body || {};

  try {
    const { data: doc, error: docError } = await supabase
      .from('document_instances')
      .select('id')
      .eq('id', id)
      .eq('user_id', user.sub)
      .maybeSingle();

    if (docError) return res.status(500).json({ error: docError.message, code: docError.code });
    if (!doc) return res.status(404).json({ error: 'Document not found' });

    try { await supabase.from('audit_log').insert({ user_id: user.sub, action: 'export_pdf', document_id: id, details: { filename } }); } catch {}

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
