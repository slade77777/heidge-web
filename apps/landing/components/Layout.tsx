import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col items-stretch">
      <div className="flex-shrink-0 sticky top-0 left-0 z-20">
        <Header />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
