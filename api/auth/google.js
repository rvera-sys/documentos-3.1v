// ═══════════════════════════════════════════════════════════════════════════════
// AUTH GOOGLE v3.2
// Cambios vs 3.1:
//  · Whitelist obligatoria (email_whitelist) — sin ella, cualquier cuenta Google entraba
//  · Nunca emite un JWT sin `sub`: sin sub, /api/documents devolvía resultados vacíos
//  · Registra los intentos rechazados en login_attempts
//  · CORS restringido a los orígenes propios
// ═══════════════════════════════════════════════════════════════════════════════
const { supabase, setCors } = require('../_lib');
const jwt = require('jsonwebtoken');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
// Poné WHITELIST_MODE=off sólo para pruebas
const WHITELIST_ON = (process.env.WHITELIST_MODE || 'on') !== 'off';

async function verificarTokenGoogle(idToken) {
  const r = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(idToken));
  if (!r.ok) return null;
  const d = await r.json().catch(() => null);
  if (!d) return null;
  if (d.aud !== GOOGLE_CLIENT_ID) return null;
  if (!['accounts.google.com', 'https://accounts.google.com'].includes(d.iss)) return null;
  if (String(d.email_verified) !== 'true') return null;
  if (Number(d.exp) * 1000 < Date.now()) return null;
  return d;
}

module.exports = async (req, res) => {
  setCors(req, res, 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { token: googleToken, picture } = req.body || {};
    if (!googleToken) return res.status(400).json({ error: 'Falta el token de Google' });

    const payload = await verificarTokenGoogle(googleToken);
    if (!payload) return res.status(401).json({ error: 'Token de Google inválido' });

    const email = String(payload.email).toLowerCase();
    const nombre = payload.name || email;

    // ── Whitelist ───────────────────────────────────────────────────────────
    let wl = null;
    if (WHITELIST_ON) {
      const { data } = await supabase.from('email_whitelist')
        .select('*').eq('email', email).eq('status', 'active').maybeSingle();
      wl = data;
      if (!wl) {
        await supabase.from('login_attempts')
          .insert({ email, google_name: nombre, status: 'rejected' });
        return res.status(403).json({
          error: 'Tu cuenta no está habilitada. Pedile el alta al administrador de la oficina.'
        });
      }
    }

    const esAdmin = ADMIN_EMAILS.includes(email) || !!(wl && wl.is_admin);
    const empresa = (wl && wl.company_name) || 'RE/MAX CREA';

    // ── Upsert en users. Si falla, se corta: sin id no hay documentos. ───────
    const { data: user, error } = await supabase.from('users')
      .upsert({
        email,
        full_name: (wl && wl.full_name) || nombre,
        picture_url: picture || null,
        is_admin: esAdmin,
        company_name: empresa,
        is_active: true,
        last_login: new Date().toISOString()
      }, { onConflict: 'email' })
      .select().single();

    if (error || !user) {
      console.error('users upsert falló:', error);
      return res.status(500).json({ error: 'No se pudo crear la sesión (tabla users)' });
    }
    if (user.is_active === false) {
      return res.status(403).json({ error: 'Tu cuenta está deshabilitada.' });
    }

    await supabase.from('login_attempts').insert({ email, google_name: nombre, status: 'ok' });

    const token = jwt.sign(
      { sub: user.id, email, full_name: user.full_name, is_admin: user.is_admin },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRATION || '12h' }
    );

    return res.status(200).json({
      success: true, token,
      user: {
        id: user.id, email, full_name: user.full_name,
        picture: picture || user.picture_url, is_admin: user.is_admin,
        company_name: user.company_name
      }
    });
  } catch (e) {
    console.error('Auth error:', e);
    return res.status(500).json({ error: 'Fallo de autenticación' });
  }
};
