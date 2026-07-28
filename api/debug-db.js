const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  // Test 1: supabase-js client
  const supabase = createClient(url, key);
  const s1 = await supabase.from('document_instances').select('count').limit(1).maybeSingle();

  // Test 2: raw fetch to PostgREST
  let rawResult = null;
  try {
    const restUrl = url.replace(/\/+$/, '') + '/rest/v1/document_instances?select=count&limit=1';
    const resp = await fetch(restUrl, { headers: { 'apikey': key, 'Authorization': 'Bearer ' + key } });
    rawResult = { status: resp.status, body: await resp.text().catch(() => '') };
  } catch (e) { rawResult = { error: e.message }; }

  // Test 3: supabase-js .select('*')
  const s2 = await supabase.from('document_instances').select('*').limit(1);

  // Test 4: schema check - list tables
  let schemaResult = null;
  try {
    const schemaUrl = url.replace(/\/+$/, '') + '/rest/v1/?select=table_name';
    const resp = await fetch(schemaUrl, { headers: { 'apikey': key, 'Authorization': 'Bearer ' + key } });
    schemaResult = { status: resp.status, body: await resp.text().catch(() => '') };
  } catch (e) { schemaResult = { error: e.message }; }

  res.status(200).json({
    url: url,
    url_valid: url && url.startsWith('https://') && url.includes('.supabase.co'),
    has_service_role: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    key_prefix: process.env.SUPABASE_SERVICE_ROLE_KEY ? process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 20) + '...' : null,
    supabase_js_select_count: { data: s1.data, error: s1.error ? { code: s1.error.code, message: s1.error.message } : null },
    supabase_js_select_star: { data: s2.data, error: s2.error ? { code: s2.error.code, message: s2.error.message } : null },
    raw_postgrest_select: rawResult,
    schema_check: schemaResult
  });
};
