import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { [key: string]: any };

const items: Record<string, object> = {
  winzers: {
    name: 'Winzeland: Winzer',
    description:
      'The Winzers are a hardworking and industrious people. They have worked the lands for generations, gathering the resources they need to survive. They are also skilled craftsmen, able to create a wide variety of items from the materials they have gathered.',
    image: 'https://www.winzeland.com/meta/contract/winzers.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0xCA77C29EeF243e195109c9bD1272F62905E25cbE',
  },
  lands: {
    name: 'Winzeland: Lands',
    description:
      'Winzeland is combined from land pieces you can find in this contract.',
    image: 'https://www.winzeland.com/meta/contract/lands.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0xCA77C29EeF243e195109c9bD1272F62905E25cbE',
  },
  resources: {
    name: 'Winzeland: Resources',
    description: 'These are resources you gather and use in Winzeland.',
    image: 'https://www.winzeland.com/meta/contract/resources.svg',
    external_link: 'https://www.winzeland.com',
    seller_fee_basis_points: 500,
    fee_recipient: '0xCA77C29EeF243e195109c9bD1272F62905E25cbE',
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
