import { WinzerProps } from '@winzeland/winzer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchGraphQL } from 'utils/api/graphql';
import { buildOpenSeaMetadata } from 'utils/api/helpers';

type Data = { [key: string]: any };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader('Cache-Control', 's-maxage=86400');

  const id = (Number(req.query.id) || 0).toString(16);

  const response = await fetchGraphQL<{ winzerToken: Record<string, any> }>(`
    {
      winzerToken(id: "0x${id}") {
        dna {
          race
          sex
          skin 
          head
          ears
          hair
          beard
          mouth
          eyes
          eyebrows
          nose
          scars
          accessory
          makeup
        }
      }
    }
  `);

  if (!response.data) {
    res.status(404);
    return res.send('Not found' as any);
  }

  const { dna } = response.data.winzerToken;

  const props: WinzerProps = {
    race: dna.race,
    sex: dna.sex,
    skinTone: dna.skin,
    head: dna.head,
    ears: dna.ears,
    hair: dna.hair,
    beard: dna.beard,
    mouth: dna.mouth,
    eyes: dna.eyes,
    eyebrows: dna.eyebrows,
    nose: dna.nose,
    scars: dna.scars,
    accessories: dna.accessory,
    makeup: dna.makeup,
  };

  const token = buildOpenSeaMetadata(
    parseInt(id, 16),
    props,
    {}, // skills
    `http://${req.headers.host}`,
  );

  res.status(200).json(token);
}
