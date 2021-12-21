import type { NextPage } from "next";

import Layout from "../components/Layout";
import BuyYourHedgie from "../components/BuyYourHedgie";
import Hero from "../components/Hero";
import MintSection from "../components/MintSection";
import Collection from "../components/Collection";
import AboutTheGame from "../components/AboutTheGame";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Faq from "../components/FAQ";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="px-4 lg:px-0">
        <MintSection className="-mt-24" />
      </div>
      <Collection />
      <AboutTheGame />
      <Features />
      <Roadmap />
      <Faq />
      <BuyYourHedgie />
    </Layout>
  );
};

export default HomePage;
