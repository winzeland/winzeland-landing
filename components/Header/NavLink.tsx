import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { UrlObject } from 'url';
import styles from './NavLink.module.css';

export type NavLinkProps = {
  title: React.ReactNode;
} & LinkProps;

export const NavLink: React.FC<NavLinkProps> = ({ title, ...props }) => {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    const linkPathname = (props.as || props.href).toString();
    return linkPathname === asPath;
  }, [asPath, props.as, props.href]);

  return (
    <Link {...props}>
      <a className={classNames(styles.link, isActive && styles.active)}>
        {title}
      </a>
    </Link>
  );
};
