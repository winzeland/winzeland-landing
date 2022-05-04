export const buildOpenSeaMetadata = (id: number) => {
  return {
    name: `Yonderer #${id}`,
    image: `${process.env.IMAGE_URL}/meta/character/${id}.svg`,
    description: `Yonderer #${id} is a citizen of Yonder Kindgom.`,
    background_color: 'FD7701',
    attributes: [
      {
        trait_type: 'Race',
        value: 'Human',
      },
      {
        trait_type: 'Sex',
        value: 'Male',
      },
      {
        trait_type: 'Hair',
        value: 'Short Brown',
      },
      //   {
      //     trait_type: 'Beard',
      //     value: 'None',
      //   },
      {
        trait_type: 'Skin',
        value: 'White',
      },
      {
        trait_type: 'Face',
        value: 'Eye scar',
      },
      {
        trait_type: 'Eyes',
        value: 'Sparkly',
      },
      {
        trait_type: 'Mouth',
        value: 'Smiling',
      },
      //   {
      //     trait_type: 'Specialty', // skill
      //     value: 'Woodcutter',
      //   },
    ],
    external_url: `${process.env.IMAGE_URL}/character/${id}`,
  };
};
