import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from 'components/Header/Header';
import { Content } from 'components/Content/Content';

const Custom404: NextPage = () => {
  return (
    <Content
      header={
        <div className="container">
          <h1>404 - Not found</h1>
        </div>
      }
    >
      <div className="container pb-24">Page can not be found.</div>
    </Content>
  );
};

export default Custom404;
