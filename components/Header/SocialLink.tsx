import { useAnalytics } from 'hooks/useAnalytics';
import React, { useCallback } from 'react';
import { NavLinkProps } from './NavLink';
import styles from './NavLink.module.css';

export const SocialLink: React.FC<NavLinkProps> = ({ href, title }) => {
  const { logEvent } = useAnalytics();

  const handleClick = useCallback(
    () =>
      logEvent('click', {
        event_category: 'social_link',
        event_label: href.toString(),
      }),
    [href, logEvent],
  );

  return (
    <a
      href={href.toString()}
      className={styles.link}
      target="_blank"
      rel="noreferrer nofollow"
      onClick={handleClick}
    >
      {title}
    </a>
  );
};
