import React from 'react';
import { NavLinkProps } from './NavLink';
import styles from './NavLink.module.css';

export const SocialLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <a
      href={href.toString()}
      className={styles.link}
      target="_blank"
      rel="noreferrer nofollow"
    >
      {title}
    </a>
  );
};
