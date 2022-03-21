import { memo } from "react";
import { PUBLIC_MENUS } from "../../constants/routes/homeMenu";

const DesktopHeader = () => {
  const menus = PUBLIC_MENUS;

  return (
    <div className="hidden lg:block">
      <div className="h-[60px] bg-fuchsia-900 w-full flex flex-row items-center justify-between px-4 lg:pl-16">
        <a
          href="/"
          className="text-white text-xl font-bold lg:text-3xl cursor-pointer"
        >
          Hedgie
        </a>
        <div className="flex-row flex gap-2 items-center">
          {menus.map((item, index) => (
            <a key={index} className="text-white font-bold cursor-pointer">
              {item.name}
            </a>
          ))}
          <a className="bg-indigo-900 px-8 py-2 ml-2 text-white">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default memo(DesktopHeader);
