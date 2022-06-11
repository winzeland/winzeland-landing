import '../styles/index.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'components/Layout/Layout';
import { MetaCard } from 'components/MetaCard/MetaCard';

function WinzelandApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
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
      <MetaCard />
      <Component {...pageProps} />
    </Layout>
  );
}

export default WinzelandApp;
