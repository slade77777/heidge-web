import Logo from "./Logo";
import { scrollToEl } from "shared/utils";
import { Discord, Twitter, Sender } from "shared/icons";
import MobileMenu from "./MobileMenu";

const SOCIALS = [
  { id: "discord", icon: Discord, href: "" },
  { id: "twitter", icon: Twitter, href: "" },
  { id: "sender", icon: Sender, href: "" },
];

export const NavLinks = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  function handleClick(scrollToId: string) {
    scrollToEl(scrollToId, -10);
    onClick?.();
  }
  return (
    <nav className={className}>
      <button
        className="hover:text-fuchsia-400 font-semibold"
        onClick={() => handleClick("game")}
      >
        Game
      </button>
      <button
        onClick={() => handleClick("roadmap")}
        className="hover:text-fuchsia-400 font-semibold px-4"
      >
        Roadmap
      </button>
      <button
        onClick={() => handleClick("faq")}
        className="hover:text-fuchsia-400 font-semibold"
      >
        FAQ
      </button>
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
          className={`group ${linkClassName}`}
          key={item.id}
          rel="noreferrer"
        >
          <item.icon
            className={iconClass || "text-white w-5 group-hover:text-teal-400"}
          />
        </a>
      ))}
    </div>
  );
};
const Header = () => {
  return (
    <div className="hdgGradient px-4 lg:px-0 py-3 sticky top-0 left-0 z-20">
      <div className="mx-auto max-w-5xl grid grid-cols-[1fr,auto] md:grid-cols-[1fr,1fr,auto] items-center">
        <div className="place-self-center justify-self-start">
          <Logo />
        </div>
        <NavLinks className="hidden lg:flex text-white space-x-12 place-self-center justify-self-center" />
        <Channels className="hidden md:flex items-center space-x-5 place-self-center justify-self-end pr-14" />
        <MobileMenu className="lg:hidden place-self-center justify-self-end" />
      </div>
    </div>
  );
};

export default Header;
