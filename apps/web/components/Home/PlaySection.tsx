import { FC, memo } from "react";
import { WorldType } from "../../types/world";
import Play from "./Play";
import { SwiperSlide } from "swiper/react";
import Carousel from "../Carousel";

const PlaySection: FC<{ worlds: Array<WorldType> }> = ({ worlds }) => {
  return (
    <div id="play" className="w-full mt-12 lg:max-w-[900px]">
      <p className="text-teal-400 font-bold text-4xl text-center mb-4">Play</p>
      <p className="text-center">
        Venture with your Hedgie through different kingdoms, collect loot, and
        make upgrades!
      </p>
      <p className="text-fuchsia-900 font-semibold underline underline-offset-2 text-center mt-2 cursor-pointer">
        <a>Learn more</a>
      </p>
      {worlds?.length && (
        <div className="mt-4">
          {worlds.length === 1 ? (
            <Play data={worlds[0]} />
          ) : (
            <Carousel>
              {worlds.map((item, index) => (
                <SwiperSlide key={index}>
                  <Play data={item} />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(PlaySection);
