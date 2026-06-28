module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    ok: true,
    env: {
      supabase_url: !!process.env.SUPABASE_URL,
      supabase_key: !!process.env.SUPABASE_ANON_KEY,
      jwt_secret: !!process.env.JWT_SECRET,
      google_client_id: !!process.env.GOOGLE_CLIENT_ID
    }
  });
};
