import React from "react";
import HeidgeImg from "../HeidgeImg";
import { Parallax } from "react-scroll-parallax";

const MeetHedgieSection = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute right-0 h-full overflow-hidden">
        <img src="./images/stripe.svg" />
      </div>

      <div className="overflow-hidden absolute w-full h-full top-0 left-0">
        <div className="absolute left-[45%] top-1/2 ">
          <Parallax speed={-15}>
            <HeidgeImg width={100} color="#af20d3" />
          </Parallax>
        </div>

        <div className="absolute left-1/2 top-[30%] ">
          <Parallax speed={2}>
            <HeidgeImg width={140} color="#ee2a2a" />
          </Parallax>
        </div>

        <div className="absolute left-1/2 top-[10%] translate-x-1/2">
          <Parallax speed={-6}>
            <HeidgeImg width={120} color="#f39407" />
          </Parallax>
        </div>

        <div className="absolute left-1/2 top-1/4 translate-x-full">
          <Parallax speed={10}>
            <HeidgeImg width={230} color="#37ffac" />
          </Parallax>
        </div>

        <div className="absolute right-0 bottom-0 translate-y-1/3 translate-x-1/3">
          <Parallax speed={2}>
            <HeidgeImg width={230} color="#fffc37" />
          </Parallax>
        </div>

        <div className="absolute right-[10%] bottom-[10%] translate-x-full">
          <Parallax speed={-5}>
            <HeidgeImg width={130} color="#ff37ac" />
          </Parallax>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/3 translate-y-16 translate-x-1/3 w-[24%]">
        <HeidgeImg width={"100%"} color="#009BDE" />
      </div>

      <div className="container mx-auto relative h-full">
        <div className="absolute inset-0 left-[10%] top-1/2 w-96 max-w-[80%]">
          <div className="text-h_cyan-100 text-xl md:text-4xl font-bold">Meet Hedgie</div>
          <div className="mt-4 mb-4 font-bold text-xs md:text-lg">
            Hedgies are legendary creatures. Skilled explorers with a storied
            past, these limited edition digital collectibles (or
            “cryptocollectibles”) are on a never-ending mission to uncover lost
            treasure and make Curio coin.
          </div>
          <div>
            <a
              href="https://medium.com/hellohedgie/hedgie-origin-story-a4469e7c6d21"
              target="_blank"
              rel="noreferrer"
              className="underline text-sm"
            >
              Read the Hedgie Origin Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetHedgieSection;
