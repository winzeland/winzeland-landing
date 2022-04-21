import type { NextApiRequest, NextApiResponse } from 'next';
import { buildSvgImage } from 'utils/api/helpers';

type Data = string;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader('Cache-Control', 's-maxage=86400');

  const id = Number(req.query.id) || 0;
  const token = buildSvgImage(id);

  if (!token) {
    res.status(404);
    return res.send('Not found');
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(token);
}
