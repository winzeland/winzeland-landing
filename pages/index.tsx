import type { NextPage } from 'next';
import Img from 'next/image';
import { Content } from 'components/Content/Content';
import { Banner } from 'components/Banner/Banner';
import imgWanderer from 'assets/icons/worker.png';
import imgLand from 'assets/icons/landscape.png';
import imgResources from 'assets/icons/potion.png';
import knightImg from 'assets/winzers/generated-nfts.gif';

const HomePage: NextPage = () => {
  return (
    <Content
      className="h-full flex-1"
      contentClassName="flex-1 h-full pt-0"
      headerClassName="pt-12 py-12 md:pt-24 md:py-24 bg-[#FD7701]"
      header={<Banner logo={knightImg} />}
    >
      <section className="py-12 md:py-24 bg-green-900 container-full text-white">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 className="mb-3">What is Winzeland?</h2>
          <p className="text-lg">
            Winzeland combines roleplaying, idle game styles and blockchain to
            create unique NFT powered game world on Polygon network. Characters,
            lands and all of Winzeland resources are NFTs that players will be
            able to gather and trade between friends.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-green-700 text-white px-6 lg:px-32">
        <div className="w-full w-3/4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 lg:gap-10">
            <div className="w-full md:flex-1">
              <h2 className="mb-3">Winzers</h2>
              <p className="mb-1">
                Winzers are citizens of Winzeland. They are unique characters
                who work for the player.
              </p>
              <p>
                Player must assign winzer to collect stone, smelt iron, make
                weapons and potions.
              </p>
            </div>
            <div className="mt-3 w-56 h-56 relative">
              <Img src={imgWanderer} layout="fill" />
            </div>
          </div>

          <div className="flex flex-col justify-between items-center mb-8 gap-4 lg:gap-10 md:flex-row-reverse">
            <div className="w-full md:flex-1">
              <h2 className="mb-3">Lands</h2>
              <p className="mb-1">
                Winzeland is split to{' '}
                <em title="Still discussing what should be correct number.">
                  10 000*
                </em>{' '}
                pieces . Each land will offer fortunes and hardships for it's
                owner.
              </p>
            </div>
            <div className="mt-3 w-56 h-56 relative">
              <Img src={imgLand} layout="fill" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 lg:gap-10">
            <div className="w-full md:flex-1">
              <h2 className="mb-3">Resources</h2>
              <p className="mb-1">
                Winzeland will let you to gather resources from lands and then
                trade or combine them to create various items and buildings.
              </p>
            </div>
            <div className="mt-3 w-56 h-56 relative">
              <Img src={imgResources} layout="fill" />
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default HomePage;
