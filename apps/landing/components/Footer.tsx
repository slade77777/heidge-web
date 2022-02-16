import { Channels, NavLinks } from './Header';

const Footer = () => {
  return (
    <footer className="text-center text-fuchsia-600 bg-hdgBlack h-44 py-12">
      <div className="flex flex-col items-center space-y-4 mx-auto max-w-lg">
        <NavLinks
          hideBuyBtn
          linkClassName="hover:text-fuchsia-400 px-3 font-semibold"
          className="hidden md:flex items-center"
        />
        <Channels className="flex space-x-6" />
        <span className="text-xs">
          © Copyright 2018-2022 Hedgie Inc. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
