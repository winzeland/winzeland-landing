import {
  TraitType,
  randomizeWinzerTraits,
  winzerTraitLabelList,
  WinzerProps,
} from '@winzeland/winzer/dist';

export const buildOpenSeaMetadata = (
  id: number,
  props: WinzerProps,
  skills: Record<string, number>,
  url: string,
) => {
  const getTrait = (type: TraitType) =>
    winzerTraitLabelList[type][props[type]] || '[Unknown]';

  return {
    name: `Winzer #${id}`,
    image: `${url}/meta/character/${id}.svg`,
    description: `Winzer #${id} is a citizen of Winzeland Kingdom.`,
    background_color: 'FD7701',
    attributes: [
      {
        trait_type: 'Race',
        value: getTrait('race'),
      },
      {
        trait_type: 'Sex',
        value: getTrait('sex'),
      },
      {
        trait_type: 'Skin',
        value: getTrait('skinTone'),
      },
      {
        trait_type: 'Ears',
        value: getTrait('ears'),
      },
      {
        trait_type: 'Eyes',
        value: getTrait('eyes'),
      },
      {
        trait_type: 'Eyebrows',
        value: getTrait('eyebrows'),
      },
      {
        trait_type: 'Mouth',
        value: getTrait('mouth'),
      },
      {
        trait_type: 'Nose',
        value: getTrait('nose'),
      },
      {
        trait_type: 'Hair',
        value: getTrait('hair'),
      },
      {
        trait_type: 'Beard',
        value: getTrait('beard'),
      },
      {
        trait_type: 'Scars',
        value: getTrait('scars'),
      },
      {
        trait_type: 'Accessories',
        value: getTrait('accessories'),
      },
      {
        trait_type: 'Makeup',
        value: getTrait('makeup'),
      },
    ],
    external_url: `${url}/character/${id}`,
  };
};
