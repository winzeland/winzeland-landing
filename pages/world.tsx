import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { P } from 'components/P/P';
import Link from 'next/link';
import { Subscribe } from 'components/Subscribe/Subscribe';

const WorldPage: NextPage = () => {
  return (
    <Content
      header={
        <div className="container text-white">
          <h1>Yonder World</h1>
          <P className="uppercase">Community governed world</P>
        </div>
      }
      headerClassName="bg-green-700 pb-8"
    >
      <div className="container">
        <p>
          Yonder World will consist of 10 000 unique land blocks. Each land
          block will be ERC-721 NFT token.
        </p>
        <h2 className="my-4 uppercase text-lg">What we plan for lands?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">Each of land zones will be unique.</li>
          <li className="mb-2">
            Will have up to 5 natural resources (wood, stone, iron, clay,
            fertile soil, water, etc).
          </li>
          <li className="mb-2">Will have different climate (cold / warm).</li>
          <li className="mb-2">May have monsters residing on it.</li>
        </ul>
        <p>
          Player will be able to gather resources from their lands, build there
          and much more.
        </p>
        <p className="mt-5">
          Read our{' '}
          <Link href="/vision">
            <a className="underline">Vision</a>
          </Link>{' '}
          for more.
        </p>
      </div>
      <Subscribe />
    </Content>
  );
};

export default WorldPage;
