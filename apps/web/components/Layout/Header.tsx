import { FC, memo, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import {
  MOBILE_PUBLIC_MENUS,
  PUBLIC_MENUS,
} from "../../constants/routes/homeMenu";
import {
  Discord,
  Twitter,
  Telegram,
  Instagram,
  Facebook,
  Youtube,
  Medium,
  Reddit,
} from "shared/icons";
import { classNames } from "shared/utils";

const SOCIALS = [
  { url: "https://t.me/hellohedgie", icon: Telegram },
  { url: "https://discord.gg/mhYwH5G", icon: Discord },
  {
    url: "https://www.instagram.com/hedgieio/",
    icon: Instagram,
  },
  { url: "https://twitter.com/hellohedgie", icon: Twitter },
  {
    url: "https://www.facebook.com/hellohedgie/",
    icon: Facebook,
  },
  { url: "https://medium.com/hellohedgie", icon: Medium },
  {
    url: "https://www.youtube.com/hellohedgie",
    icon: Youtube,
  },
  { url: "https://www.reddit.com/r/Hedgie", icon: Reddit },
];

const Header: FC = () => {
  const menus = PUBLIC_MENUS;
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <div className="h-[60px] bg-[#380934] w-full flex flex-row items-center justify-between px-4 lg:pl-16">
        <span className="text-white text-xl font-bold lg:text-3xl">Hedgie</span>
        <MenuIcon
          onClick={() => setMobileMenu(!showMobileMenu)}
          className="w-8 h-8 text-white block lg:hidden"
        />
        <div className="flex-row hidden lg:flex gap-2 items-center">
          {menus.map((item, index) => (
            <a key={index} className="text-white font-bold">
              {item.name}
            </a>
          ))}
          <a className="bg-[#61285d] px-8 py-2 ml-2 text-white">Sign In</a>
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col bg-[#20041e] space-x-2 transition-all ease-in-out duration-700",
          showMobileMenu ? "h-[700px]" : "h-0"
        )}
      >
        <div
          className={classNames(
            "py-8 px-8 transition-opacity ease-in",
            showMobileMenu ? "duration-1000" : "duration-0",
            showMobileMenu ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="mb-8">
            <a className="bg-[#61285d] px-8 py-2 ml-2 text-white">Sign In</a>
          </div>
          {MOBILE_PUBLIC_MENUS.map((item, index) => (
            <div key={index} className="border-t-[1px] border-[#341b31d9] py-2">
              <a className="text-white font-bold">{item.name}</a>
            </div>
          ))}
          <div className="flex flex-row flex-wrap">
            {SOCIALS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-1/4 mt-3 flex items-center justify-center"
              >
                <div className="w-[42px] h-[42px] rounded-[21px] bg-[#62295e] flex items-center justify-center">
                  <item.icon className="w-[21px] h-[21px]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
