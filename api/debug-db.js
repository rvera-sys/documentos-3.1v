const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY);
  const { data, error } = await supabase.from('document_instances').select('count').limit(1).maybeSingle();
  res.status(200).json({
    has_service_role: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    key_prefix: process.env.SUPABASE_SERVICE_ROLE_KEY ? process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 20) + '...' : null,
    supabase_result: { data, error: error ? { code: error.code, message: error.message, details: error.details } : null }
  });
};
