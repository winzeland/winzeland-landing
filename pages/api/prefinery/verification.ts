// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createHmac } from 'crypto';

type Data = {
  signature: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const signature = createHmac('sha256', process.env.PREFINERY_SECRET) // secret key (keep safe!)
    .update(req.query.email as string)
    .digest('hex');

  res.status(200).json({ signature });
}
