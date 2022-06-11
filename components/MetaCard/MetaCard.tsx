import { FC } from 'react';
import Head from 'next/head';
import imgWorker from 'assets/images/worker.png';

type MetaCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  twitterHandle: string;
};

const defaults: MetaCardProps = {
  title: `Winzeland - Real blockchain gaming`,
  description: `Winzeland is an pixel art idle browser game designed to run fully on blockchain and NFTs!`,
  image: `${process.env.NEXT_PUBLIC_URL}${imgWorker.src}`,
  url: process.env.NEXT_PUBLIC_URL,
  twitterHandle: '@winzeland',
};

export const MetaCard: FC<Partial<MetaCardProps>> = ({
  title,
  description,
  image,
  url,
  twitterHandle,
}) => {
  return (
    <Head>
      <title>{title || defaults.title}</title>
      <meta name="description" content={description || defaults.description} />

      <meta property="og:title" content={title || defaults.title} />
      <meta
        property="og:description"
        content={description || defaults.description}
      />
      <meta property="og:image" content={image || defaults.image} />
      <meta property="og:url" content={url || defaults.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title || defaults.title} />
      <meta
        name="twitter:description"
        content={description || defaults.description}
      />
      <meta name="twitter:image" content={image || defaults.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content={twitterHandle || defaults.twitterHandle}
      />
    </Head>
  );
};
