import { SocialLinks } from 'components/SocialLinks/SocialLinks';
import { NavLink } from './NavLink';

export const Header = () => {
  return (
    <header className="w-full fixed top-0 z-90 pt-5 lg:pt-8">
      <div className="container relative flex h-full items-center justify-end mx-auto">
        <div className="items-center hidden lg:flex">
          <ul className="flex space-x-2 mr-2">
            <li>
              <NavLink
                href="https://blog.winzeland.com"
                title="Blog"
                target="_blank"
              />
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};
