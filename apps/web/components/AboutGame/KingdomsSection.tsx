import React from "react";
import { useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const theKingdoms = [
  {
    icon: "./images/mountains-world-small.jpg",
    image: "./images/mountains-world-full.jpg",
    name: "Mountain",
  },
  {
    icon: "./images/wetlands-world-small.jpg",
    image: "./images/wetlands-world-full.jpg",
    name: "Wetland",
  },
  {
    icon: "./images/desert-world-small.jpg",
    image: "./images/desert-world-full.jpg",
    name: "Desert",
  },
  {
    icon: "./images/forest-world-small.jpg",
    image: "./images/forest-world-full.jpg",
    name: "Forest",
  },
];

const KingdomsSection = () => {
  const [selectedKingdom, setSelectedKingdom] = useState(theKingdoms[0]);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="relative h-full flex items-center">
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center flex-col min-w-[45%]">
            <div>
              <div>
                <div className="text-center text-lg">
                  Click on a Kingdom to learn more!
                </div>
                <div className="grid grid-cols-4 gap-5 mt-5">
                  {theKingdoms.map((item, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center font-semibold cursor-pointer hover:text-[#710157]"
                      onClick={() => setSelectedKingdom(item)}
                    >
                      <div className="w-24 h-24 mb-2">
                        <img
                          src={item.icon}
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="text-lg">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center flex-col w-96 max-w-[80%] mt-12">
                <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">
                  The Kingdoms
                </div>
                <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
                  Where shall we break ground?! There are four kingdoms to
                  choose from: Desert,Wetlands, Forest, and Mountains. Send your
                  Hedgie to the kingdom that corresponds to its power for best
                  results!
                </div>
              </div>
            </div>
          </div>

          <ParallaxBanner
            className="bg-cover w-full"
            layers={[{ image: selectedKingdom.image, speed: 8 }]}
          ></ParallaxBanner>
        </div>
      </div>
    </div>
  );
};

export default KingdomsSection;
