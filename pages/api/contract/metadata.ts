import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { [key: string]: any };

const items: Record<string, object> = {
  winzers: {
    name: 'Winzeland: Winzer',
    description: 'Winzers are citizens of Winzeland.',
    image: 'https://www.winzeland.com/meta/contract/winzers.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0x497971B6535A9f7a5D7ef8e5a6F47bb309A0C3Ea',
  },
  lands: {
    name: 'Winzeland: Lands',
    description:
      'Winzeland is combined from land pieces you can find in this contract.',
    image: 'https://www.winzeland.com/meta/contract/lands.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0x497971B6535A9f7a5D7ef8e5a6F47bb309A0C3Ea',
  },
  resources: {
    name: 'Winzeland: Resources',
    description: 'These are resources you gather and use in Winzeland.',
    image: 'https://www.winzeland.com/meta/contract/resources.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0x497971B6535A9f7a5D7ef8e5a6F47bb309A0C3Ea',
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = String(req.query.id);
  res.setHeader('Cache-Control', 's-maxage=86400');

  if (!items.hasOwnProperty(id)) {
    res.status(404);
    return res.send('Not found' as any);
  }

  res.status(200).json(items[id]);
}
