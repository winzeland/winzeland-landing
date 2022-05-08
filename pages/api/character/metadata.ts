import type { NextApiRequest, NextApiResponse } from 'next';
import { buildOpenSeaMetadata } from 'utils/api/helpers';

type Data = { [key: string]: any };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader('Cache-Control', 's-maxage=86400');

  const id = Number(req.query.id) || 0;
  const token = buildOpenSeaMetadata(id, `http://${req.headers.host}`);

  if (!token) {
    res.status(404);
    return res.send('Not found' as any);
  }

  res.status(200).json(token);
}
