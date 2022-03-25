import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import HeidgeImg from "../HeidgeImg";

const GetStartedSection = () => {
  return (
    <div
      className="h-screen w-full bg-center bg-no-repeat bg-cover relative overflow-hidden"
      style={{ backgroundImage: "url(./images/sky-red.jpg)" }}
    >
      <div className="w-52 h-16 absolute left-[10%] bottom-[30%] shadow-[0_1_2_0_rgba(242,179,9,0.39)] bg-[url('/images/left-start.svg'), url('/images/right-start.svg')] bg-gradient-to-b from-[#f1d97e] to-[#ca8314] rounded-[18px] border-[1px] border-[#f2b309] bg-[#f2b309] flex items-center justify-center mt-4 text-white font-semibold text-xl bg-blend-luminosity bg-no-repeat bg-auto">
        Get started!
      </div>

      <div className="absolute w-[10%] rotate-[-14deg] bottom-[10%] right-[25%]">
        <HeidgeImg width={"100%"} color="#49cfac" />
      </div>
      <div className="absolute w-[14%] rotate-[-22deg] bottom-[-10%] right-[24%]">
        <HeidgeImg width={"100%"} color="#e3476f" />
      </div>
      <div className="absolute w-[32%] rotate-[-20deg] bottom-[-15%] right-[-4%]">
        <HeidgeImg width={"100%"} color="#009BDE" />
      </div>
    </div>
  );
};

export default GetStartedSection;
