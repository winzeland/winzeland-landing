import { SocialLinks } from 'components/SocialLinks/SocialLinks';

export const Header = () => {
  return (
    <header className="w-full fixed top-0 z-90 pt-5 lg:pt-8">
      <div className="container relative flex h-full items-center justify-end mx-auto">
        <div className="items-center hidden lg:flex">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};
