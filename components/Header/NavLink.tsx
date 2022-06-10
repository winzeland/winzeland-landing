import classNames from 'classnames';
import { useAnalytics } from 'hooks/useAnalytics';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { HTMLAttributeAnchorTarget, useCallback, useMemo } from 'react';
import styles from './NavLink.module.css';

export type NavLinkProps = {
  title: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
} & LinkProps;

export const NavLink: React.FC<NavLinkProps> = ({
  title,
  target,
  className,
  ...props
}) => {
  const { logEvent } = useAnalytics();
  const { pathname } = useRouter();

  const isActive = useMemo(() => {
    const linkPathname = (props.as || props.href).toString();
    return linkPathname === pathname;
  }, [pathname, props.as, props.href]);

  const rel = useMemo(() => {
    if (target === '_blank') {
      return 'noopener noreferrer';
    }
    return undefined;
  }, [target]);

  const handleClick = useCallback(
    () =>
      logEvent('click', {
        event_category: 'nav_link',
        event_label: props.href.toString(),
      }),
    [logEvent, props.href],
  );

  return (
    <Link {...props}>
      <a
        className={classNames(
          styles.link,
          className,
          isActive && styles.active,
        )}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {title}
      </a>
    </Link>
  );
};
