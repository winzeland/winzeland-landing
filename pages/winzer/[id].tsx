import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Img from 'next/image';
import { Content } from 'components/Content/Content';
import openSeaIcon from 'assets/icons/opensea.svg';
import Custom404 from 'pages/404';
import { NavLink } from 'components/Header/NavLink';
import { linkWinzerToOpenSea } from 'utils/helpers';
import { fetchGraphQL } from 'utils/api/graphql';
import { WinzerProps } from '@winzeland/winzer';
import { buildOpenSeaMetadata } from 'utils/api/helpers';

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const id = (Number(context.query.id) || 0).toString(16);

    const response = await fetchGraphQL<{ winzerToken: Record<string, any> }>(`
      {
        winzerToken(id: "0x${id}") {
          identifier
          dna {
            race
            sex
            skin 
            head
            ears
            hair
            beard
            mouth
            eyes
            eyebrows
            nose
            scars
            accessory
            makeup
          }
        }
      }
    `);

    const { dna } = response.data.winzerToken;

    const props: WinzerProps = {
      race: dna.race,
      sex: dna.sex,
      skinTone: dna.skin,
      head: dna.head,
      ears: dna.ears,
      hair: dna.hair,
      beard: dna.beard,
      mouth: dna.mouth,
      eyes: dna.eyes,
      eyebrows: dna.eyebrows,
      nose: dna.nose,
      scars: dna.scars,
      accessories: dna.accessory,
      makeup: dna.makeup,
    };

    const winzer = buildOpenSeaMetadata(
      parseInt(id, 16),
      props,
      {}, // skills
      process.env.URL,
    );

    return {
      props: {
        id: response.data.winzerToken.identifier,
        winzer,
        dna: props,
      },
    };
  } catch (e) {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

const WinzerDetailsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ id, winzer, notFound }) => {
  if (notFound) {
    return <Custom404 />;
  }
  return (
    <Content
      className="h-full flex-1"
      contentClassName="flex-1 h-full pt-0"
      header={
        <div className="container mb-8">
          <h1 className="pb-4 border-b-2 border-green">{winzer.name}</h1>
        </div>
      }
    >
      <section className="py-12 md:py-24 px-6">
        <div className="container">
          <div className="flex flex-col justify-between items-center mb-8 gap-4 lg:gap-10 md:flex-row">
            <div className="w-full flex flex-col items-center justify-center md:w-64">
              <div
                className={`w-64 h-64 rounded-lg drop-shadow-lg bg-[#${winzer.background_color}]`}
              >
                <Img src={winzer.image} width={256} height={256} />
              </div>
              <div className="mt-4 flex flex-row items-center gap-4">
                <NavLink
                  href={linkWinzerToOpenSea(id)}
                  title={
                    <>
                      <Img
                        src={openSeaIcon}
                        width={24}
                        height={24}
                        alt="OpenSea"
                      />
                      &nbsp; OpenSea
                    </>
                  }
                  target="_blank"
                />
              </div>
            </div>
            <div className="w-full md:flex-1">
              <h2 className="mb-3 text-center md:text-left">{winzer.name}</h2>
              <p className="mb-1">{winzer.description}</p>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default WinzerDetailsPage;
