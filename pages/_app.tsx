import '../styles/index.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'components/Layout/Layout';

function WinzelandApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Winzeland</title>
        <meta
          name="description"
          content="Winzeland is an pixel art idle browser game designed to run fully on blockchain and NFTs!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default WinzelandApp;
