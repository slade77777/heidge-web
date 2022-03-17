import { memo } from "react";
import HeidgeImg from "../HeidgeImg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[url('/images/mobile-header-bg.png')] lg:bg-[url('/images/home-backround.png')] relative bg-no-repeat bg-[center_right] bg-cover bg-scroll h-96 w-full pl-4 lg:pl-16 pt-8 h-[285px] lg:h-[445px]">
      <div className="text-white text-2xl lg:text-4xl font-semibold">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hello, I'm Hedgie!
      </div>
      <div className="text-[#62295e] mt-4 text-lg lg:text-xl font-semibold">
        Play the game for free. Earn cryptocoin. Spend in real life.
      </div>
      <div className="w-[220px] h-[62px] shadow-[0_4px_8px_0_rgba(242,179,9,0.39)] bg-[url('/images/left-start.svg'), url('/images/right-start.svg')] bg-gradient-to-b from-[#f1d97e] to-[#ca8314] rounded-[18px] border-[1px] border-[#f2b309] bg-[#f2b309] flex items-center justify-center mt-4 text-white font-semibold text-xl bg-blend-luminosity bg-no-repeat bg-auto">
        Mint Your Hedgies
      </div>
      <div className="absolute bottom-[-65px] right-[-88px] lg:bottom-[-110px] lg:right-[24%] rotate-12 lg:rotate-4">
        <div className="lg:hidden">
          <HeidgeImg color="#009BDE" width={220} />
        </div>
        <div className="hidden lg:block">
          <HeidgeImg color="#009BDE" width={390} />
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
