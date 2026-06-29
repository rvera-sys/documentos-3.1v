module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const results = {};

  // Test 1: Can we reach Google tokeninfo?
  try {
    const resp = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=test');
    results.google_tokeninfo = { status: resp.status, ok: resp.ok };
  } catch (e) {
    results.google_tokeninfo = { error: e.message };
  }

  // Test 2: Does fetch exist?
  results.fetch_available = typeof fetch !== 'undefined';

  // Test 3: Node.js version
  results.node_version = process.version;

  // Test 4: Check env
  results.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ? 'set' : 'missing';

  return res.status(200).json(results);
};
