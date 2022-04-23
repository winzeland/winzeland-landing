import { FC } from 'react';

import Img from 'next/image';
import { SOCIAL_LINK_DISCORD, SOCIAL_LINK_TWITTER } from 'config/constants';
import { SocialLink } from 'components/Header/SocialLink';

import twitterIcon from 'assets/icons/twitter.svg';
import discordIcon from 'assets/icons/discord.svg';

export const SocialLinks: FC = () => {
  return (
    <ul className="flex space-x-2">
      <li>
        <SocialLink
          href={SOCIAL_LINK_TWITTER}
          title={<Img src={twitterIcon} alt="Twitter" width={14} height={14} />}
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_DISCORD}
          title={<Img src={discordIcon} alt="Twitter" width={14} height={14} />}
        />
      </li>
    </ul>
  );
};
