import type { NextApiRequest, NextApiResponse } from 'next';

type Data = string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader('Cache-Control', 's-maxage=86400');

  const id = String(req.query.id);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">
      <text x="24" y="24">Item: #${id}</text>
    </svg>
  `);
}
