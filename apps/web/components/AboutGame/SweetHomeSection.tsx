import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const SweetHomeSection = () => {
  return (
    <div
      className="h-screen relative overflow-hidden bg-right bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(./images/rays.svg)" }}
    >
      <Parallax speed={15} className="absolute right-[15%] top-[5%] w-[45%]">
        <img src="./images/house.png" className="" />
      </Parallax>
      <div className="relative h-full flex items-center">
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center flex-col min-w-[45%] relative">
            <Parallax speed={-8} className="h-1/3">
              <img src="./images/furniture.png" className="w-1/2" />
            </Parallax>
            <div className="flex justify-center flex-col w-96 max-w-[80%] mt-12">
              <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">
                Home Sweet Home
              </div>
              <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
                Every hero needs a home base! Journeys cost energy, and the
                Hedgie House is where your Hedgie recovers its energy. Use the
                resources your Hedgie finds in Curiopia to build furniture, and
                make upgrades to speed up your Hedgie’s recovery time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetHomeSection;
