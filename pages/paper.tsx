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
        <div className="bg-[#FD7701] rounded-lg text-white p-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-center lg:text-left">
            We are working on proof of concept platform and depending on our
            findings this page contents may still change. Download our initial
            idea draft while we are working on this page.
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
          Winzeland is browser game which combines roleplaying, idle game styles
          and blockchain to create unique NFT powered game world on Polygon
          network. Characters, lands and all of Winzeland resources are NFTs
          that players will be able to gather and trade between friends.
        </p>
      </Block>

      <Block title="Where NFTs come in?">
        <p>
          Characters, lands, resources, buildings, potions and etc. in the
          Winzeland will be NFTs. We are planning on having 3 NFT smart
          contracts:
        </p>
        <h3 className="mt-5 mb-3">1. Winzers</h3>
        <p>
          Winzers are characters and citizens of Winzeland world. They are most
          important NFTs for the players because Winzers will be doing bidding
          of their owner:
        </p>
        <ul className="ul">
          <li>Gather resources</li>
          <li>Craft items, weapons and potions</li>
          <li>Attack and defend settlements</li>
          <li>Explore lands</li>
          <li>As a citizen, has a vote power in DAO</li>
        </ul>
        <p>
          Players will assign winzers to a job similary like staking any other
          NFT. What and how fast winzer will gather resources will depend on
          which building they are assigned and what kind of equipment they have.
        </p>
        <p>
          It's planned to offer 10 000 winzers initially, however players will
          have a possibility to "marry" any two owned ones and receive third
          one.
        </p>
        <p>
          Each winzer will have randomly generated looks and up to 5 skills
          which would make them even more special. Skill could be a blessing
          which enchanches winzers capabilies or curse which decreases them, for
          example blessing could increase winzers crafting speed by 15%, while
          curse would curse would decrease it.
        </p>
        <h3 className="mt-5 mb-3">2. Land Contracts</h3>
        <p>
          Winzeland is divided into land pieces which offers fortunes and
          hardships for it's owner:
        </p>
        <ul className="ul">
          <li>
            Each land will have some of basic natural resources:
            <ul className="ul">
              <li>Wood</li>
              <li>Stone</li>
              <li>Water</li>
              <li>Iron Ore</li>
              <li>Gold Ore, and so on...</li>
            </ul>
          </li>
          <li>
            Land may have a zone where owner can build buildings and create a
            settlement.
          </li>
          <li>
            Land may have monster camps - if they are not dealt with, will try
            to steal resources from winzers.
          </li>
          <li>
            Lands will have different climates: having too hot or to cold
            climate will require player to equip winzers correctly, so they
            would not loose their working efficiency.
          </li>
        </ul>
        <p>
          Land owners will have a chance to rent their land for other players.
        </p>
        <p>
          It's planned to offer 10 000 lands for the players. If the event of
          land amount not being sufficient because of the large count of the
          players, Winzer DAO could vote for finding more lands in a new
          continent.
        </p>
        <h3 className="mt-5 mb-3">3. Resources</h3>
        <p>
          Resources will contain everything else that player can own and is not
          Winzer and Land in the Winzeland World:
        </p>
        <ul className="ul">
          <li>Basic resources like: wood, stone, clay and iron ore;</li>
          <li>Resources such as: planks, bricks, iron bars or gold bars;</li>
          <li>Consumables like: food, water and potions;</li>
          <li>Equipment like: pickaxes, swords, armors;</li>
          <li>
            Constructions such as: mining quary, woodcutters cut or sawmill;
          </li>
          <li>Even farm animals</li>
        </ul>
        <p>
          Resources can be used to craft another resources when all criterias
          are met:
        </p>
        <ul className="ul">
          <li>
            Put <em>wood</em> on fire to create <em>bonfire</em>, after fire is
            put down you will receive some <em>charcoal</em>
          </li>
          <li>
            Put <em>clay</em> to the bonfire to make <em>clay bricks</em>
          </li>
          <li>
            Use <em>clay bricks</em> to construct <em>wall</em>
          </li>
          <li>
            Put <em>wall</em> on your land to protect your settlement.
          </li>
          <li>
            Break down <em>wall</em> to get back some of the{' '}
            <em>clay bricks</em>
          </li>
        </ul>
        <p>
          There is virtually unlimited possibilites of how resources could be
          used.
        </p>
      </Block>
    </Content>
  );
};

export default HomePage;
