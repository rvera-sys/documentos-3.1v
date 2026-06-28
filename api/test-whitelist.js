const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const supabaseAdmin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const supabaseAnon = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

  const testEmail = 'rvera@remax.com.ar';

  const [adminResult, anonResult] = await Promise.all([
    supabaseAdmin.from('email_whitelist').select('*').eq('email', testEmail).eq('status', 'active').single(),
    supabaseAnon.from('email_whitelist').select('*').eq('email', testEmail).eq('status', 'active').single()
  ]);

  res.status(200).json({
    service_role: { data: adminResult.data, error: adminResult.error ? adminResult.error.message : null },
    anon: { data: anonResult.data, error: anonResult.error ? anonResult.error.message : null }
  });
};
