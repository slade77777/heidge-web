import React from "react";
import { useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const thePowers = [
  {
    icon: "./images/powerWater.svg",
    name: "Water",
    desc: "Helps Hedgie perform best in the Wetlands",
  },
  {
    icon: "./images/powerFire.svg",
    name: "Fire",
    desc: "Helps Hedgie perform best in the Desert",
  },
  {
    icon: "./images/powerEarth.svg",
    name: "Earth",
    desc: "Helps Hedgie perform best in the Forest",
  },
  {
    icon: "./images/powerAir.svg",
    name: "Air",
    desc: "Helps Hedgie perform best in the Mountains",
  },
  {
    icon: "./images/skillLuck.svg",
    name: "Luck",
    desc: "Helps Hedgie find Consumables and Collectibles",
  },
  {
    icon: "./images/skillPrudence.svg",
    name: "Water",
    desc: "Helps Hedgie find and take care of Tools",
  },
  {
    icon: "./images/skillIntelligence.svg",
    name: "Water",
    desc: "Helps Hedgie find Resources",
  },
  {
    icon: "./images/skillCharm.svg",
    name: "Water",
    desc: "Helps Hedgie find Curio",
  },
];

const PowersSection = () => {
  const [selectedPower, setSelectedPower] = useState(thePowers[0]);

  return (
    <div className="h-screen bg-[#ffca61] relative overflow-hidden">
      <Parallax speed={10} className="absolute right-0 top-[-10%]">
        <img src="./images/stripeSlide03.svg" />
      </Parallax>
      <Parallax
        speed={-7}
        className="absolute right-0 bottom-[-10%] w-full flex justify-end"
      >
        <img src="./images/cloud.png" className="opacity-50 w-7/12" />
      </Parallax>
      <div className="container mx-auto relative h-full flex items-center max-w-5xl">
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-12 w-full">
          <div className="grid grid-rows-2">
            <div className="hidden md:block">
              <div className="text-center text-lg">
                Psst... click the power to see what it does!
              </div>
              <div className="grid grid-cols-4 gap-5 mt-5">
                {thePowers.map((item, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center font-semibold cursor-pointer hover:text-[#710157]"
                    onClick={() => setSelectedPower(item)}
                  >
                    <div className="w-11 mb-2">
                      <img src={item.icon} />
                    </div>
                    <div className="text-lg">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center flex-col w-96 max-w-[80%]">
              <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">
                The Powers
              </div>
              <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
                No two Hedgies are the same – each one has its own hex colour
                and possesses eight unique attributes. These attributes
                determine your Hedgie’s performance in the game. Some Hedgies
                have dominant attributes, while others are more balanced. But we
                love all Hedgies the same!
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center">
              <img src={selectedPower.icon} className="w-24 h-24" />
            </div>
            <div className="mt-9 text-xl font-extrabold text-[#710157] mb-2">
              {selectedPower.name}
            </div>
            <div className="text-lg">{selectedPower.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowersSection;
