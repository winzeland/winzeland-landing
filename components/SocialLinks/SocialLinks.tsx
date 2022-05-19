import { FC } from 'react';

import Img from 'next/image';
import {
  SOCIAL_LINK_DISCORD,
  SOCIAL_LINK_FACEBOOK,
  SOCIAL_LINK_GITHUB,
  SOCIAL_LINK_INSTAGRAM,
  SOCIAL_LINK_REDDIT,
  SOCIAL_LINK_TELEGRAM,
  SOCIAL_LINK_TWITTER,
} from 'config/constants';
import { SocialLink } from 'components/Header/SocialLink';

import twitterIcon from 'assets/icons/twitter.svg';
import discordIcon from 'assets/icons/discord.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import instagramIcon from 'assets/icons/instagram.svg';
import telegramIcon from 'assets/icons/telegram.svg';
import redditIcon from 'assets/icons/reddit.svg';
import githubIcon from 'assets/icons/github.svg';

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
          title={<Img src={discordIcon} alt="Discord" width={14} height={14} />}
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_TELEGRAM}
          title={
            <Img src={telegramIcon} alt="Telegram" width={14} height={14} />
          }
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_INSTAGRAM}
          title={
            <Img src={instagramIcon} alt="Instagram" width={14} height={14} />
          }
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_FACEBOOK}
          title={
            <Img src={facebookIcon} alt="Facebook" width={14} height={14} />
          }
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_REDDIT}
          title={<Img src={redditIcon} alt="Reddit" width={14} height={14} />}
        />
      </li>
      <li>
        <SocialLink
          href={SOCIAL_LINK_GITHUB}
          title={<Img src={githubIcon} alt="GitHub" width={14} height={14} />}
        />
      </li>
    </ul>
  );
};
