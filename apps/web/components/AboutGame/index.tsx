import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import BannerSection from "./BannerSection";
import EarnSection from "./EarnSection";
import GetStartedSection from "./GetStartedSection";
import KingdomsSection from "./KingdomsSection";
import LootSection from "./LootSection";
import MeetHedgieSection from "./MeetHedgieSection";
import PowersSection from "./PowersSection";
import SweetHomeSection from "./SweetHomeSection";

const AboutGame = () => {
  return (
    <ParallaxProvider>
      <div>
        <BannerSection />
        <MeetHedgieSection />
        <PowersSection />
        <KingdomsSection />
        <LootSection />
        <SweetHomeSection />
        <EarnSection />
        <GetStartedSection />
      </div>
    </ParallaxProvider>
  );
};

export default AboutGame;
