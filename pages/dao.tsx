import type { NextPage } from 'next';
import { Content } from 'components/Content/Content';
import { P } from 'components/P/P';
import { Subscribe } from 'components/Subscribe/Subscribe';

const DaoPage: NextPage = () => {
  return (
    <Content
      header={
        <div className="container text-white">
          <h1>Yonder DAO</h1>
          <P className="uppercase">Community governed world</P>
        </div>
      }
      headerClassName="bg-red-700 pb-8"
    >
      <div className="container">
        <p>
          We are researching options and possibilities for Yonder DAO. We would
          like to give option for our players to change world rules by voting to
          proposals.
        </p>
        <p className="mt-3">
          At this point we think that each player will get a vote for each
          character they own.
        </p>
      </div>
      <Subscribe />
    </Content>
  );
};

export default DaoPage;
