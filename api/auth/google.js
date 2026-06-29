const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

const JWT_SECRET = process.env.JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());

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
      console.error('Tokeninfo: audience mismatch', { expected: GOOGLE_CLIENT_ID, got: data.aud });
      return null;
    }
    if (data.email_verified !== 'true' && data.email_verified !== true) {
      console.error('Tokeninfo: email not verified', { email_verified: data.email_verified });
      return null;
    }
    return data;
  } catch (e) {
    console.error('Google tokeninfo error:', e.message);
    return null;
  }
}

async function tryQueryUsers(email) {
  try {
    const { data, error } = await supabaseAdmin.from('users').select('*').eq('email', email).maybeSingle();
    if (error && error.code === '42P01') return { notFound: true };
    if (error) return { error };
    return { data };
  } catch (e) {
    return { notFound: true };
  }
}

async function tryInsertUser(userData) {
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert(userData)
      .select()
      .single();
    if (error && error.code === '42P01') return { notFound: true };
    if (error) return { error };
    return { data };
  } catch (e) {
    return { notFound: true };
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

    const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase());

    const userResult = await tryQueryUsers(email);
    let userId = null;
    let userFullName = name;
    let userIsAdmin = isAdmin;
    let companyName = 'RE/MAX CREA';

    if (userResult.data) {
      userId = userResult.data.id;
      userFullName = userResult.data.full_name || name;
      userIsAdmin = userResult.data.is_admin || isAdmin;
      companyName = userResult.data.company_name || 'RE/MAX CREA';
      try {
        await supabaseAdmin.from('users').update({ last_login: new Date().toISOString(), picture_url: picture }).eq('id', userId);
      } catch (e) { /* non-critical */ }
    } else if (!userResult.notFound) {
      console.log('Users table exists but query failed:', userResult.error?.message);
    }

    if (!userId) {
      const insertResult = await tryInsertUser({
        email, full_name: name, picture_url: picture, is_admin: isAdmin, company_name: 'RE/MAX CREA'
      });
      if (insertResult.data) {
        userId = insertResult.data.id;
        userIsAdmin = insertResult.data.is_admin;
        companyName = insertResult.data.company_name || 'RE/MAX CREA';
        console.log('Created user in DB:', email);
      } else {
        console.log('Users table not available, using JWT-only auth for:', email);
      }
    }

    const jwt = require('jsonwebtoken');
    const tokenPayload = {
      email,
      full_name: userFullName,
      is_admin: userIsAdmin,
      picture: picture || null
    };
    if (userId) tokenPayload.sub = userId;

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '24h' });

    return res.status(200).json({
      success: true,
      token,
      user: { id: userId, email, full_name: userFullName, picture, is_admin: userIsAdmin, company_name: companyName }
    });

  } catch (error) {
    console.error('Auth error:', error.message, error.stack);
    return res.status(500).json({ error: 'Authentication failed', message: error.message });
  }
};
