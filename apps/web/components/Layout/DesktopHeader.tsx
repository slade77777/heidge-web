import { memo } from "react";
import { PUBLIC_MENUS } from "../../constants/routes/homeMenu";
import Logo from "../Logo";
import LoginButton from "../Authentication/LoginButton";

const DesktopHeader = () => {
  const menus = PUBLIC_MENUS;

  return (
    <div className="hidden lg:block">
      <div className="h-[60px] bg-fuchsia-900 w-full flex flex-row items-center justify-between px-4 lg:pl-16">
        <Logo />
        <div className="flex-row flex gap-2 items-center">
          {menus.map((item, index) => (
            <a key={index} className="text-white font-bold cursor-pointer">
              {item.name}
            </a>
          ))}
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default memo(DesktopHeader);
