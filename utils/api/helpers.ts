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

export const buildSvgImage = (id: number) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">
      <style>.base { fill: white; font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif; font-size: 17px; }</style>
      <rect width="100%" height="100%" fill="#FD7701" />
      <text x="10" y="40" class="base">#Yonderer ${id}</text>
      <text x="10" y="70" class="base">#test yonder</text>
    </svg>
`;
};
