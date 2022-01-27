import Logo from './Logo';
import { scrollToEl } from 'shared/utils';
import { Discord, Twitter, Telegram } from 'shared/icons';
import MobileMenu from './MobileMenu';
import { DISCORD, INSTAGRAM, TELEGRAM, TWITTER } from '../constants';
import { Button } from 'shared';
import Instagram from 'shared/icons/Instagram';

const SOCIALS = [
  { id: 'discord', icon: Discord, href: DISCORD },
  { id: 'twitter', icon: Twitter, href: TWITTER },
  { id: 'sender', icon: Telegram, href: TELEGRAM },
  { id: 'instagram', icon: Instagram, href: INSTAGRAM },
];

export const NavLinks = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  function handleClick(scrollToId: string) {
    scrollToEl(scrollToId, -50);
    onClick?.();
  }
  return (
    <nav className={className}>
      <button
        className="hover:text-fuchsia-400 font-semibold"
        onClick={() => handleClick('game')}
      >
        Game
      </button>
      <button
        onClick={() => handleClick('roadmap')}
        className="hover:text-fuchsia-400 font-semibold px-4"
      >
        Roadmap
      </button>
      <button
        onClick={() => handleClick('faq')}
        className="hover:text-fuchsia-400 font-semibold"
      >
        FAQ
      </button>
      <Button
        onClick={() => handleClick('mint-box')}
        className="btn border border-teal-400 text-teal-400 py-2 px-3 hover:bg-teal-400 hover:text-white"
      >
        Buy Hedgie
      </Button>
    </nav>
  );
};
export const Channels = ({
  className,
  linkClassName,
  iconClass,
}: {
  className?: string;
  linkClassName?: string;
  iconClass?: string;
}) => {
  return (
    <div className={className}>
      {SOCIALS.map((item) => (
        <a
          href={item.href}
          target="_blank"
          className={`group cursor-pointer ${linkClassName}`}
          key={item.id}
          rel="noreferrer"
        >
          <item.icon
            className={iconClass || 'text-white w-5 group-hover:text-teal-400'}
          />
        </a>
      ))}
    </div>
  );
};
const Header = () => {
  return (
    <div className="hdgGradient px-4 lg:px-0 py-3 sticky top-0 left-0 z-20">
      <div className="mx-auto max-w-5xl grid grid-cols-[auto,auto] md:grid-cols-[auto,1fr,auto]">
        <div className="place-self-center lg:place-self-start justify-self-start">
          <Logo className="text-white h-10 pt-1" />
        </div>
        <NavLinks className="hidden lg:flex text-white space-x-8 place-self-center justify-self-end pr-10" />
        <Channels className="hidden md:flex items-center space-x-5 place-self-center justify-self-end pr-14 lg:pr-0" />
        <MobileMenu className="lg:hidden place-self-center justify-self-end" />
      </div>
    </div>
  );
};

export default Header;
