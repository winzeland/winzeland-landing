import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { NavLink } from 'components/Header/NavLink';
import { PropsWithChildren } from 'react';

type BlockProps = {
  title: React.ReactNode;
};

const Block: React.FC<PropsWithChildren<BlockProps>> = ({
  children,
  title,
}) => {
  return (
    <section className="py-4 md:py-8 container text-lg">
      <h2 className="mb-3">{title}</h2>
      {children}
    </section>
  );
}; 

const HomePage: NextPage = () => {
  return (
    <Content
      className="h-full flex-1"
      contentClassName="flex-1 h-full pt-0"
      header={
        <div className="container mb-8">
          <h1>Winzeland Paper</h1>
          <p>[White]paper on how Winzeland game would work</p>
        </div>
      }
    >
      <section className="py-4 md-py-8 container">
        <div className="bg-[#FD7701] rounded-lg text-white p-4 flex flex-row justify-between items-center gap-4">
          <div>
            We are working on proof of concept platform and depending on our
            findings this page contents may still change. Download our initial
            idea draft while we are working on this page --&gt;
          </div>
          <div className="flex-shrink-0">
            <NavLink
              href="/winzeland-draft.pdf"
              target="_blank"
              title={<span className="text-white">Download PDF Draft</span>}
            />
          </div>
        </div>
      </section>
      <Block title="So, what is Winzeland?">
        <p>
          Winzeland combines roleplaying, afk game styles and blockchain to
          create unique NFT powered game world on Polygon network. Characters,
          lands and all of Winzeland resources are NFTs that players will be
          able to gather and trade between friends.
        </p>
      </Block>

      <Block title="Where NFTs come in?">
        <p>
          Winzeland combines roleplaying, afk game styles and blockchain to
          create unique NFT powered game world on Polygon network. Characters,
          lands and all of Winzeland resources are NFTs that players will be
          able to gather and trade between friends.
        </p>
      </Block>
    </Content>
  );
};

export default HomePage;
