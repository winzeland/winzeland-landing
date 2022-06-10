import { SocialLinks } from 'components/SocialLinks/SocialLinks';
import { NavLink } from './NavLink';
import OpenWindowIcon from 'assets/icons/open-in-window.svg';
import Image from 'next/image';
import Script from 'next/script';

export const Header = () => {
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
      <header className="w-full fixed top-0 z-50 pt-5 lg:pt-8">
        <div className="container relative flex h-full items-center justify-end mx-auto">
          <div className="items-center flex">
            <ul className="flex space-x-2 mr-2">
              <li>
                <NavLink href="/" title="Home" />
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
      </header>
    </>
  );
};
