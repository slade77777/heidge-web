import React from "react";
import { useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const gearIcon =
  "data:image/png;base64,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";

const lootItems = [
  {
    icon: "./images/curio.svg",
    image: "./images/curio.svg",
    name: "Curio",
    desc: "Find Curio in the four Kingdoms, and sell your boosts for more. Collect Curio and spend it inside the game (coming soon), and at Hedgie-Approved businesses in real world.",
  },
  {
    icon: "./images/opal.png",
    image: "./images/boost.png",
    name: "Consumables",
    desc: "Each consumable can be ordinary, special or rare, and offers a different temporary boost to your Hedgie’s attributes. Discover different consumables in different Kingdoms.",
  },
  {
    icon: "./images/resources.png",
    image: "./images/resources.png",
    name: "Resources",
    desc: "Five resources are used to build furniture for the Hedgie House. Journey to the Mountains to find metal, to the Wetlands to collect water, to the Desert to find fire, and to the Forest to gather wood. Journey to all four Kingdoms to find earth.",
  },
  {
    icon: "./images/compas.png",
    image: "./images/tools-full.png",
    name: "Tools",
    desc: "Equip tools to boost your Hedgie’s attributes and loot-finding skills, or to shorten your Hedgie’s travel time. But watch out: Tools can be lost or break from wear and tear!",
  },
  {
    icon: gearIcon,
    image: "./images/gear-full.png",
    name: "Gear",
    desc: "Suit up! Gear like hats, gloves, boots, coats, and umbrellas boosts your Hedgie’s attributes. They come in every Hedgie hex colour. Gear that’s the same hex colour as your Hedgie will give it a double boost. If your Hedgie is equipped with all Gear of its own hex colour, it will double the boost again!",
  },
];

const LootSection = () => {
  const [selectedItem, setSelectedItem] = useState(lootItems[0]);

  return (
    <div className="h-screen bg-[#ffca61] relative overflow-hidden">
      <Parallax
        speed={-7}
        className="absolute right-0 bottom-[-10%] w-full flex justify-end"
      >
        <img src="./images/cloud2.png" className="w-7/12" />
      </Parallax>
      <div className="container mx-auto relative h-full flex items-center max-w-5xl">
        <div className="grid grid-cols-2 gap-12 w-full">
          <div className="grid grid-rows-2">
            <div className="">
              <div className="text-center text-lg">
                Click on a loot item to learn more!
              </div>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {lootItems.map((item, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-center font-semibold cursor-pointer hover:text-[#710157]"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center p-5 mb-2">
                      <img src={item.icon} className="max-w-full max-h-full" />
                    </div>
                    <div className="text-lg">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center flex-col w-96 max-w-[80%]">
              <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">Loot</div>
              <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
                Curiopia has tons of loot to discover! Boost your Hedgie’s
                attributes with consumables, tools, and gear. Find resources to
                craft furniture for your Hedgie House, and use your loot to earn
                more Curio coin by selling it to the Game Coffers.
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedItem.image}
                className={`max-h-full max-w-full h-auto w-auto ${
                  selectedItem?.name === "Curio" ? "!h-96" : ""
                }`}
              />
            </div>
            <div className="mt-5 text-xl font-extrabold text-[#710157] mb-2">
              {selectedItem.name}
            </div>
            <div className="text-lg">{selectedItem.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LootSection;
