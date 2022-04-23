import { FC, MouseEvent, useCallback } from 'react';
import Img from 'next/image';
import { SOCIAL_LINK_DISCORD, SOCIAL_LINK_TWITTER } from 'config/constants';
import knightImg from 'assets/icons/knight.png';
import { useAnalytics } from 'hooks/useAnalytics';

export const Banner: FC = () => {
  const { logEvent } = useAnalytics();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) =>
      logEvent('click', {
        event_category: 'social_link',
        event_label: event.currentTarget.href,
      }),
    [logEvent],
  );

  return (
    <section className="container-full text-white">
      <div className="w-52 h-52 relative mx-auto">
        <Img src={knightImg} layout="fill" />
      </div>
      <h1 className="text-center mt-4">WINZELAND</h1>
      <div className="mt-4 max-w-md mx-auto">
        <p className="text-center">Video game World fully powered by NFTs</p>
      </div>
      <div className="mt-6 flex flex-col space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-evenly max-w-md mx-auto">
        <a
          className="w-52 text-center shadow-lg bg-[#5865F2] text-white hover:bg-[#3942a3] duration-300 will-change px-4 py-3 rounded-lg uppercase"
          href={SOCIAL_LINK_DISCORD}
          target="_blank"
          rel="nofollow noreferrer"
          onClick={handleClick}
        >
          Join our Discord
        </a>
        <a
          className="w-52 text-center shadow-lg bg-[#1DA1F2] text-white hover:bg-[#1678b5] duration-300 will-change px-4 py-3 rounded-lg uppercase"
          href={SOCIAL_LINK_TWITTER}
          target="_blank"
          rel="nofollow noreferrer"
          onClick={handleClick}
        >
          Follow our Twitter
        </a>
      </div>
    </section>
  );
};
