import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { PropsWithChildrenOnly } from 'types/types';

export const Layout: React.FC<PropsWithChildrenOnly> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex flex-grow flex-col justify-between items-center">
        <div className="flex-grow w-full min-h-full	flex-1">{children}</div>
        <div className="w-full flex-shrink-0 flex-grow-0">
          <Footer />
        </div>
      </div>
    </>
  );
};
