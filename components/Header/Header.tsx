import { NavLink } from './NavLink';
import OpenWindowIcon from 'assets/icons/open-in-window.svg';
import Image from 'next/image';
import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';
import styles from './NavLink.module.css';
import classNames from 'classnames';

export const Header = () => {
  useEffect(() => {
    prefinery('recordFormImpression');
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 96);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(value => !value), []);

  return (
    <>
      <Script
        id="inline-prefinery"
        dangerouslySetInnerHTML={{
          __html: `prefinery=window.prefinery||function(){(window.prefinery.q=window.prefinery.q||[]).push(arguments)};`,
        }}
      />
      <Script
        id="src-prefinery"
        src="https://widget.prefinery.com/widget/v2/eqqjqviw.js"
        defer
      />
      <header
        className={classNames(
          'w-full fixed top-0 z-50 py-5 lg:py-8 bg-transparent md:bg-[#f0ab01] transition duration-300',
          {
            'md:bg-opacity-80 md:drop-shadow': scrolled,
          },
        )}
      >
        <div className="container relative flex h-full items-center justify-end mx-auto">
          <div className="items-center flex">
            <div className="relative">
              <div className="mb-3 flex justify-end md:hidden">
                <button className={styles.link} onClick={toggleMenu}>
                  Menu
                </button>
              </div>
              <ul
                className={classNames(
                  'flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 md:mr-2 absolute md:static right-0',
                  {
                    'hidden md:flex': !menuOpen,
                  },
                )}
              >
                <li>
                  <NavLink href="/" title="Home" />
                </li>
                <li>
                  <NavLink href="/join" title="Join" />
                </li>
                <li>
                  <NavLink href="/paper" title="Paper" />
                </li>
                <li>
                  <NavLink
                    href="https://blog.winzeland.com"
                    title={
                      <>
                        Blog&nbsp;
                        <Image
                          src={OpenWindowIcon}
                          alt="Blog"
                          width={14}
                          height={14}
                          priority
                        />
                      </>
                    }
                    target="_blank"
                  />
                </li>
                <li>
                  <NavLink
                    href="https://opensea.io/collection/winzeland-winzer"
                    title={
                      <>
                        OpenSea&nbsp;
                        <Image
                          src={OpenWindowIcon}
                          alt="Open Sea"
                          width={14}
                          height={14}
                          priority
                        />
                      </>
                    }
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
