import type { NextPage } from 'next';
import Layout from '../common/Layout';
import {
  Collection,
  Hero,
  MintSection,
  AboutTheGame,
  Features,
  Roadmap,
  Faq,
} from '../components/LandingPage';

import BuyYourHedgie from '../components/LandingPage/BuyYourHedgie';

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
