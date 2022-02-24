import type { NextPage } from 'next';
import { Toaster } from 'shared';
import Layout from '../components/Layout';
import BuyYourHedgie from '../components/BuyYourHedgie';
import Hero from '../components/Hero';
import MintSection from '../components/MintSection';
import Collection from '../components/Collection';
import AboutTheGame from '../components/AboutTheGame';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import Faq from '../components/FAQ';

const HomePage: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />

        <div className="px-4 lg:px-0 relative z-10">
          <MintSection className="-mt-24" />
          <div id="mint-box" className="absolute -top-20 left-1/2" />
        </div>
        <Collection />
        <AboutTheGame />
        <Features />
        <Roadmap />
        <Faq />
        <BuyYourHedgie />
      </Layout>
      <Toaster />
    </>
  );
};

export default HomePage;
