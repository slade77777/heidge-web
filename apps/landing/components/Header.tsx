import Link from 'next/link';
import { Discord, Twitter, Telegram } from 'shared/icons';
import MobileMenu from './MobileMenu';
import { DISCORD, INSTAGRAM, TELEGRAM, TWITTER } from '../constants';
import Instagram from 'shared/icons/Instagram';

const SOCIALS = [
  { id: 'discord', icon: Discord, href: DISCORD },
  { id: 'twitter', icon: Twitter, href: TWITTER },
  { id: 'sender', icon: Telegram, href: TELEGRAM },
  { id: 'instagram', icon: Instagram, href: INSTAGRAM },
];

const NAVS = [
  { id: 'game', title: 'Game', href: '/#game' },
  { id: 'roadmap', title: 'Roadmap', href: '/#roadmap' },
  { id: 'faq', title: 'FAQ', href: '/#faq' },
  {
    id: 'team',
    title: 'Team',
    href: 'https://www.hedgie.io/our-team',
    openNewTab: true,
  },
  { id: 'check', title: 'Check', href: '/check' },
];

export const NavLinks = ({
  className,
  hideBuyBtn,
  linkClassName,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
  hideBuyBtn?: boolean;
  linkClassName?: string;
}) => {
  return (
    <nav className={className}>
      {NAVS.map((nav) => (
        <Link key={nav.id} href={nav.href}>
          <a
            onClick={onClick}
            target={nav.openNewTab ? '_blank' : undefined}
            className={linkClassName || 'hover:text-fuchsia-400 font-semibold'}
            rel={nav.openNewTab ? 'noreferrer' : undefined}
          >
            {nav.title}
          </a>
        </Link>
      ))}
      {hideBuyBtn ? null : (
        <Link href="/#mint-box">
          <a
            onClick={onClick}
            className="btn border border-teal-400 text-teal-400 py-1.5 px-4 hover:bg-teal-400 hover:text-white"
          >
            Mint
          </a>
        </Link>
      )}
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
    <div className="hdgGradient px-4 lg:px-0 py-3">
      <div className="mx-auto max-w-5xl grid grid-cols-[auto,auto] md:grid-cols-[auto,1fr,auto]">
        <div className="place-self-center justify-self-start">
          <Link href="/">
            <a>
              {/*<Logo className="text-white h-10 pt-1" />*/}
              <span className="font-bold text-[28px] text-white">
                Kingdoms of Curiopia
              </span>
            </a>
          </Link>
        </div>
        <NavLinks className="hidden lg:flex items-center text-white space-x-5 place-self-center justify-self-end pr-5" />
        <Channels className="hidden md:flex items-center space-x-3 place-self-center justify-self-end pr-14 lg:pr-0" />
        <MobileMenu className="lg:hidden place-self-center justify-self-end" />
      </div>
    </div>
  );
};

export default Header;
