// Vercel serverless function — GitHub OAuth initiation for Decap CMS
export default function handler(req, res) {
  const { host } = req.headers;
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const params = new URLSearchParams({
    client_id: process.env.OAUTH_CLIENT_ID,
    redirect_uri: `${baseUrl}/api/callback`,
    scope: 'repo,user',
  });

  res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
}
