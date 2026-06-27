const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, name, picture } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    const { data: whitelist } = await supabase
      .from('email_whitelist')
      .select('*')
      .eq('email', email)
      .eq('status', 'active')
      .single();

    if (!whitelist) {
      await supabase.from('login_attempts').insert({ email: email, google_name: name, status: 'pending' }).catch(() => {});
      return res.status(403).json({ error: 'Email not authorized', message: 'Tu email no está habilitado aún', reason: 'pending' });
    }

    let { data: user } = await supabase.from('users').select('*').eq('email', email).single();

    if (!user) {
      const { data: newUser } = await supabase
        .from('users')
        .insert({ email: email, full_name: name, picture_url: picture, is_admin: whitelist.is_admin || false, company_name: whitelist.company_name })
        .select()
        .single();
      user = newUser;
    }

    await supabase.from('users').update({ last_login: new Date().toISOString() }).eq('id', user.id).catch(() => {});

    const token = jwt.sign({ sub: user.id, email: user.email, full_name: user.full_name, is_admin: user.is_admin }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return res.status(200).json({ success: true, token: token, user: { id: user.id, email: user.email, full_name: user.full_name, picture: picture, is_admin: user.is_admin, company_name: user.company_name } });

  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ error: 'Authentication failed', message: error.message });
  }
};
