import { Channels, NavLinks } from './Header';

const Footer = () => {
  return (
    <footer className="text-center text-fuchsia-600 bg-hdgBlack h-44 py-12">
      <div className="flex flex-col items-center space-y-4 mx-auto max-w-lg">
        <NavLinks className="font-semibold hidden md:grid grid-cols-4 divide-x divide-fuchsia-900" />
        <Channels className="flex space-x-3" />
        <span className="text-xs">
          © Copyright 2019 Hedgie Inc. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
