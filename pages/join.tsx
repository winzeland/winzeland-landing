import type { NextPage } from 'next';
import Img from 'next/image';
import { Content } from 'components/Content/Content';
import imgWorker from 'assets/images/worker.png';
import imgLand from 'assets/images/land.png';
import imgResources from 'assets/images/resources.png';
import { JoinWaitlistMini } from 'components/JoinWaitlist/JoinWaitlistMini';
import Script from 'next/script';

const JoinPage: NextPage = () => {
  return (
    <>
      <Script type="application/ld+json" id="event-structured-data">
        {`{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Initial Winzer Sale",
  "image": "${process.env.URL + imgWorker.src}", 
  "startDate": "2022-08-08",
  "endDate": "2022-08-10",
  "location": {
    "@type": "Place",
    "name": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "postalCode": "",
      "addressCountry": ""
    }
  }
}`}
      </Script>
      <Content
        className="h-full flex-1"
        contentClassName="flex-1 h-full pt-0"
        header={
          <div className="container mb-8">
            <h1>Join the Waitlist</h1>
            <p>Get in the priority queue for the Winzer sale on August 08th!</p>
          </div>
        }
      >
        <section className="py-6 md:py-3 bg-[#FD7701] container-full text-white">
          <div className="mx-auto w-full text-center">
            <JoinWaitlistMini />
          </div>
        </section>

        <section className="py-12 md:py-24 text-black px-6 lg:px-32">
          <div className="container">
            <h2 className="mb-3">Why Join Waitlist?</h2>
            <p>
              Only members of the waitlist will be able to participate in the
              sale.
              <br />
              The earlier member joined waitlist, the earlier they will receive
              their invite to the sale!
            </p>
            <h2 className="mt-12 mb-3">
              Can I climb up to in the priority list?
            </h2>
            <p className="mb-1">Yes! By spreading the word!</p>
            <p>
              After joining waitlist and confirming your email you will receive
              a link you can share with your friends - by having your friends
              join the waitlist too, your position will increase!
            </p>
            <p>
              You will also receive access to the dashboard where you can track
              your position in the waitlist.
            </p>
            <h2 className="mt-12 mb-3">Why Waitlist at all?</h2>
            <p>
              We are planning on launching initial sale where 10% of Winzers
              will be sold to the early adopters.
              <br />
              To make sure our oldest and most devoted to the project members
              would be able to get some of that 10%.
            </p>
            <h2 className="mt-12 mb-3">How sale will work?</h2>
            <p className="mb-1">
              1. Waitlist members will receive email asking them to link their
              wallet address to the email couple days before sale.
              <br />
              2. On a sale day, we will send an invite to the actual sale for
              the first 100 members (number may change depending on how much
              members are in the list).
              <br />
              3. After an hour, if some of Winzers are not yet purchased - we
              will send invite to another 100 members of the waitlist.
            </p>
            <p className="mb-1">
              We will be sending invites (3rd step) for 48 hours or until all
              Winzers are sold, whichever comes first.
            </p>
            <p>
              We will release dedicated post explaining everything in detail
              soon!
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
              <div className="mt-3 w-56 relative">
                <Img src={imgWorker} layout="responsive" />
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
              <div className="mt-3 w-56 relative">
                <Img src={imgLand} layout="responsive" />
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
    </>
  );
};

export default JoinPage;
