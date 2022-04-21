import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { SOCIAL_LINK_DISCORD, SOCIAL_LINK_TWITTER } from 'config/constants';

import twitterIcon from 'assets/icons/twitter.svg';
import discordIcon from 'assets/icons/discord.svg';

import { SocialLink } from './SocialLink';

export const Header = () => {
  return (
    <header className="w-full fixed top-0 z-90 pt-5 lg:pt-8">
      <div className="container relative flex h-full items-center justify-center mx-auto">
        <div className="flex-grow">
          <div className="flex">
            <Link href="/">
              <a className="py-2 px-4 bg-red-800 text-white rounded-lg hover:bg-red-900 will-change-bg duration-300 ease-in-out">
                yonder.
              </a>
            </Link>
          </div>
        </div>
        <div className="items-center hidden lg:flex">
          <ul className="flex space-x-2">
            <li>
              <NavLink href="/characters" title="Characters" />
            </li>
            <li>
              <NavLink href="/world" title="World" />
            </li>
            <li>
              <NavLink href="/dao" title="DAO" />
            </li>
            <li>
              <NavLink href="/vision" title="Vision" />
            </li>
            <li>
              <SocialLink
                href={SOCIAL_LINK_TWITTER}
                title={
                  <Image
                    src={twitterIcon}
                    alt="Twitter"
                    width={14}
                    height={14}
                  />
                }
              />
            </li>
            <li>
              <SocialLink
                href={SOCIAL_LINK_DISCORD}
                title={
                  <Image
                    src={discordIcon}
                    alt="Twitter"
                    width={14}
                    height={14}
                  />
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
