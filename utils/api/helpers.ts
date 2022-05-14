import {
  TraitType,
  winzerTraitLabelList,
  WinzerProps,
} from '@winzeland/winzer';

const getName = (id: number) => {
  if (id === 0) {
    return 'Dagda';
  }
  return `Winzer #${id}`;
};

const getDescription = (id: number) => {
  if (id === 0) {
    return 'It is said that the Dagda was the first Winzer to ever set foot in the Winzeland. He was a plain man, without any special skills or talents. However, it is also said that all Winzers are descendants of the Dagda. Whether or not this is true, it is clear that the Dagda was an important figure in the history of the Winzeland. It is because of him that the Winzeland exists today, and his legacy continues to influence the Winzers who live there. Without the Dagda, there would be no Winzeland, and no Winzers.';
  }
  return `Winzer #${id} is a hardworking citizen of Winzeland.`;
};

export const buildOpenSeaMetadata = (
  id: number,
  props: WinzerProps,
  skills: Record<string, number>,
  url: string,
) => {
  const getTrait = (type: TraitType) =>
    winzerTraitLabelList[type][props[type]] || '[Unknown]';

  return {
    name: getName(id),
    image: `${url}/meta/winzer/${id}.svg`,
    description: getDescription(id),
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
    external_url: `${url}/winzer/${id}`,
  };
};
