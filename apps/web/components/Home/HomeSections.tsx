import { FC, memo, useCallback } from "react";
import PlaySection from "./PlaySection";
import { WorldType } from "../../types/world";
import EarnSection from "./EarnSection";
import SpendSection from "./SpendSection";
import { BusinessType } from "../../types/business";
import { scrollToElement } from "../../utils/scroll";

const homeSections = ["play", "earn", "spend"];

const HomeSections: FC<{
  worlds: Array<WorldType>;
  businesses: Array<BusinessType>;
}> = ({ worlds, businesses }) => {
  const scrollToSection = useCallback((nav: string) => {
    scrollToElement(nav, 0);
  }, []);

  return (
    <div className="w-full px-2 py-4 mt-4 flex flex-col items-center">
      <div className="w-full flex flex-row items-center justify-center px-8  lg:px-12 lg:max-w-[900px] gap-12">
        {homeSections.map((nav, index) => (
          <div
            onClick={() => scrollToSection(nav)}
            key={index}
            className="text-fuchsia-900 font-semibold underline underline-offset-2 text-xl cursor-pointer"
          >
            {nav}
          </div>
        ))}
      </div>
      <PlaySection worlds={worlds} />
      <EarnSection />
      <SpendSection businesses={businesses} />
    </div>
  );
};

export default memo(HomeSections);
