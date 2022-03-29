import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const BannerSection = () => {
  return (
    <ParallaxBanner
      className="w-full bg-center bg-no-repeat bg-cover"
      layers={[{ image: "./images/sky-red.jpg", speed: -15 }]}
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <div className="container mx-auto relative h-full">
        <div className="absolute flex flex-col w-96 max-w-[80%] bottom-[20%] left-[10%]">
          <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">The Game</div>
          <div className="text-white mt-4 font-bold text-xs md:text-lg">
            Hedgie is a free-to-play idle strategy game. Journey with your
            Hedgie through four unique kingdoms and dig up all sorts of loot to
            boost your Hedgie’s performance and most importantly - earn crypto
            coin!
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default BannerSection;
