import '../styles/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'components/Layout/Layout';

function YonderApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Yonder Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default YonderApp;
