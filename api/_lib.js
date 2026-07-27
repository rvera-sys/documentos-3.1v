// Utilidades compartidas por los endpoints (v3.2)
const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

// IMPORTANTE: usar SERVICE_ROLE en el servidor para poder activar RLS
// y bloquear el acceso directo con la anon key.
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY,
  { auth: { persistSession: false } }
);

const ORIGENES = (process.env.ALLOWED_ORIGINS ||
  'https://documentos-3-1v.vercel.app,https://rvera-sys.github.io')
  .split(',').map(s => s.trim());

function setCors(req, res, metodos) {
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', ORIGENES.includes(origin) ? origin : ORIGENES[0]);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', metodos || 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function verifyAuth(req) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  try {
    const p = jwt.verify(h.slice(7), process.env.JWT_SECRET);
    return p && p.sub ? p : null;   // sin sub el token es inservible
  } catch (_) { return null; }
}

// Guarda contra payloads gigantes que revienten la función
function limitar(obj, maxBytes) {
  const s = JSON.stringify(obj || {});
  if (s.length > (maxBytes || 512000)) throw new Error('Payload demasiado grande');
  return obj;
}

module.exports = { supabase, setCors, verifyAuth, limitar };
