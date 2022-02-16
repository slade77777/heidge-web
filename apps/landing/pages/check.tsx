import React from 'react';
import Layout from '../components/Layout';
import CheckForm from '../components/CheckForm';
import Expandable from '../components/Expandable';
import HowToFindHexCode from '../components/HowToFindHexCode';

const CheckPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-4 lg:py-10 px-4 lg:px-0">
        <div className="prose lg:prose-lg pb-2">
          <p>
            Gen1 (Genesis) and Gen 2 Hedgie holders mint Gen 3 Hedgies for free
            (+gas) one for each Hedgie they hold. Because of this we expect
            people want to check if a certain Hedgie has already redeemed the
            gen 3 mint or not.
          </p>
          <p>Enter the hex code below to verify that</p>
        </div>
        <CheckForm />
        <Expandable
          textClassName="text-teal-400 font-medium"
          className="pt-3"
          titleClassName="grid grid-cols-[1fr,auto] gap-x-3 items-center"
          title="How to find hex code ?"
          content={<HowToFindHexCode />}
        />
      </div>
    </Layout>
  );
};

export default CheckPage;
