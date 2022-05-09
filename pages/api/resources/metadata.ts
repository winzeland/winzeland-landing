import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { [key: string]: any };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  const id = (Number(req.query.id) || 0).toString(16);

  res.status(200).json({
    name: `Resource #${id}`,
    image: `http://${req.headers.host}/meta/resources/${id}.svg`,
    description: `Winzer #${id} is a citizen of Winzeland Kingdom.`,
    background_color: 'FD7701',
    attributes: [
      {
        trait_type: 'Type',
        value: 'TEST',
      },
    ],
    external_url: `http://${req.headers.host}/resource/${id}`,
  });
}
