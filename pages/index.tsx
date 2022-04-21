import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { Subscribe } from 'components/Subscribe/Subscribe';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <Content className="h-full flex-1" contentClassName="flex-1 h-full">
      <div className="container flex flex-col items-center justify-center">
        <h1>Yonder Network</h1>

        <p className="mt-10 text-center">
          In the world of blockchain-based games, non-fungible tokens (NFTs) are
          all the rage. And for good reason: they provide a way to create
          unique, digital assets that can be collected, traded, and used in
          gameplay.
        </p>
        <p className="mt-5 text-center">
          Now, a new game called Yonder will be shaking up the scene by making
          NFTs an essential part of the gameplay experience. In Yonder, players
          collect resources such as wood, stone, and metal in order to build
          structures and upgrade their base camp. These resources are
          represented by NFTs, which can be stored in the player's inventory and
          used at any time. What's more, the game also features a robust market
          system where players can buy and sell resources with one another.
        </p>

        <p className="mt-5">
          Read our{' '}
          <Link href="/vision">
            <a className="underline">Vision</a>
          </Link>{' '}
          for more.
        </p>

        <Subscribe />
      </div>
    </Content>
  );
};

export default HomePage;
