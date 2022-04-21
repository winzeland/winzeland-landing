import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { P } from 'components/P/P';
import Link from 'next/link';
import { Subscribe } from 'components/Subscribe/Subscribe';

const CharacterPage: NextPage = () => {
  return (
    <Content
      header={
        <div className="container text-white">
          <h1>Yonder Characters</h1>
          <P className="uppercase">Community governed world</P>
        </div>
      }
      headerClassName="bg-blue-700 pb-8"
    >
      <div className="container">
        <p>
          Yonder Characters will be uniquely generated NFT profiles which will
          be used as workers to do player bidding.
        </p>
        <h2 className="my-4 uppercase text-lg">What we plan for characters?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Character visible traits will be randomly generated from predefined
            images.
          </li>
          <li className="mb-2">
            Character may have special skill which would help working land
            (master miner, smith, woodcutter, etc)
          </li>
          <li className="mb-2">
            Player will be required to own a character to play the game
          </li>
          <li className="mb-2">
            Character may be a requirement to vote in Yonder DAO.
          </li>
        </ul>
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

export default CharacterPage;
