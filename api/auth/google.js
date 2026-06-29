const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

async function verifyGoogleToken(idToken) {
  try {
    const resp = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
    if (!resp.ok) return null;
    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = Object.fromEntries(new URLSearchParams(text));
    }
    if (data.aud !== GOOGLE_CLIENT_ID) {
      console.error('Google tokeninfo: audience mismatch', { expected: GOOGLE_CLIENT_ID, got: data.aud });
      return null;
    }
    if (data.email_verified !== 'true' && data.email_verified !== true) {
      console.error('Google tokeninfo: email not verified', { email_verified: data.email_verified });
      return null;
    }
    return data;
  } catch (e) {
    console.error('Google tokeninfo error:', e.message);
    return null;
  }
}

module.exports = async (req, res) => {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { token: googleToken, email, name, picture } = req.body;
    if (!googleToken || !email) return res.status(400).json({ error: 'Token and email required' });

    const payload = await verifyGoogleToken(googleToken);
    if (!payload) return res.status(401).json({ error: 'Invalid Google token' });
    if (payload.email !== email) return res.status(401).json({ error: 'Email mismatch' });

    let { data: user, error: fetchErr } = await supabaseAdmin
      .from('users').select('*').eq('email', email).single();

    if (fetchErr || !user) {
      const { data: newUser, error: insertErr } = await supabaseAdmin
        .from('users')
        .insert({ email, full_name: name, picture_url: picture, is_admin: false, company_name: 'RE/MAX CREA' })
        .select()
        .single();

      if (insertErr) {
        console.error('User insert error:', insertErr);
        return res.status(500).json({ error: 'Failed to create user', detail: insertErr.message });
      }
      user = newUser;
    }

    try {
      await supabaseAdmin.from('users').update({ last_login: new Date().toISOString() }).eq('id', user.id);
    } catch (e) { /* non-critical */ }

    const jwt = require('jsonwebtoken');
    const token = jwt.sign(
      { sub: user.id, email: user.email, full_name: user.full_name, is_admin: user.is_admin },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      success: true,
      token,
      user: { id: user.id, email: user.email, full_name: user.full_name, picture, is_admin: user.is_admin, company_name: user.company_name }
    });

  } catch (error) {
    console.error('Auth error:', error.message, error.stack);
    return res.status(500).json({ error: 'Authentication failed', message: error.message });
  }
};
