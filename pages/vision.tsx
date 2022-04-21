/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { P } from 'components/P/P';
import { Subscribe } from 'components/Subscribe/Subscribe';

const VisionPage: NextPage = () => {
  return (
    <Content
      header={
        <div className="container text-white">
          <h1>Yonder Vision</h1>
          <P className="uppercase">Community governed NFT world</P>
        </div>
      }
      headerClassName="bg-yellow-700 pb-8"
    >
      <div className="container">
        <p className="mb-3">
          <strong>This vision is still not final and may change!</strong>
        </p>
        <p className="mb-5">
          We are still on early brainstorming stage and looking at different
          options. We will put our primary ideas here, but if we will see that
          current solutions are not possible because of blockchain limitations
          or it just doesn't make sense we will try to change it something even
          better.
        </p>
        <p className="mb-5">
          Our plan is to make world of NFT's on ethereum based network. We have
          yet to decide which blockchain to use, but we want to have cheap
          network fees and large transactions per second.
        </p>

        <p>
          * LAND: the world would be split into x land NFT's. Land NFT's would
          have random attributes indicating what's good in there. For example,
          one land could have up to five NATURAL RESOURCES there: wood, stone,
          water, iron, gold etc.
        </p>
        <p>
          * CHARACTERS: to be able to play, you would need to have at least one
          character, the character would also be an NFT and would have randomly
          assigned attributes: attack, defense, woodcutting and etc. Characters
          could be "breed" to make new character.
        </p>
        <p>
          * RESOURCES: an ERC-1155 NFT which would hold different resource types
          retrieved from LAND or manufactured by user, like: wood, iron ore,
          potions and so on. Contract would allow to mint / create and burn /
          destroy these resources as part of the game.
        </p>
        <p className="my-5">
          <strong>Now, the gameplay</strong>
        </p>

        <p>
          The main idea of the game is resource gathering and building on the
          lands, so to be able to explore the world fully player will have to
          have a CHARACTER who would work on the LAND.
        </p>
        <p>
          For CHARACTER to be able to work on LAND, LAND must be owned or rented
          to the player. There would also be LAND which would allow working
          there but with greatly reduced efficiency, so players without LAND
          would be able to get resources.
        </p>
        <p>
          Once a player has enough NATURAL RESOURCES - he can use them to build
          a BUILDING (Woodcutter's Hut for woody LAND, Iron mine for LAND with
          iron deposit and etc), then would be able to assign CHARACTER to the
          BUILDING, so it would gather more resources.
        </p>
        <p>
          There would be also BUILDINGS allowing you to exchange one RESOURCE
          for another (Smelter to transform Iron ore into Iron bar, Weaponsmith
          - Iron bar -&gt; Sword, then again use Smelter to smelt sword back to
          iron bar), all BUILDINGs would require the character to work there.
        </p>
        <p>
          LAND's that was not worked on (there are no CHARACTERs there) for some
          time will become infected by MONSTERS, players will need to eradicate
          them - otherwise, resource gathering efficiency will be reduced
          greatly.
        </p>
        <p>
          Each BUILDING will have limit on how much of CHARACTER's can work
          there. Building owner can decide to allow only his own CHARACTER's
          there and make it open to anyone, and collect % of resources gathered.
        </p>
        <p>
          Each LAND natural RESOURCES (wood, iron, stone etc) would have a max
          gathered resource limit before it's depleted, which means that
          resources are not unlimited.
        </p>

        <p className="my-5">
          <strong>Resource gathering</strong>
        </p>
        <p>
          To gather RESOURCES, player transfer their CHARACTER to the BUILDING
          contract assigning them to the work.
        </p>
        <p>
          Each resource will have fixed time needed to get it, CHARACTER
          assigned to work for time required will be able to claim resources.
        </p>
        <p>
          For example, to mint 1 gold ore your character will need to work for 1
          hour. If you will leave your character at work for 12 hours, you will
          be able to claim 12 gold ores. If he worked only 30 minutes - you will
          still get 0.5 gold ore.
        </p>
        <p>
          You will be required to stop work and withdraw your character from the
          building if you would want to assign it to another job or to go and
          kill monsters.
        </p>
        <p>
          Character skill levels would decrease time needed to gather 1
          resource. Giving tools (pickaxe for example) to character would
          decrease time needed.
        </p>
        <p>
          Land infested by monsters would increase time needed to gather
          resources.
        </p>

        <p>
          Some percentage of resources gathered would go to the game world
          itself as a tax, which then would be used as drop items for monsters -
          so killing monsters would also add some value to the players without
          LAND.
        </p>
      </div>
      <Subscribe />
    </Content>
  );
};

export default VisionPage;
