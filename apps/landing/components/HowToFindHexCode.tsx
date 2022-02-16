import React from 'react';
import { OPENSEA_URL } from '../constants';

const HowToFindHexCode = () => {
  return (
    <div className="prose lg:prose-lg rounded bg-slate-50 p-4 text-gray-600 prose-a:text-teal-400 prose-a:hover:text-fuchsia-900 prose-a:hover:cursor-pointer">
      <p>
        On{' '}
        <a href={OPENSEA_URL} target="_blank" rel="noreferrer">
          OpenSea
        </a>{' '}
        on a given Hedgie detail page you will see hex code like so. Copy if,
        and paste into the field above.
      </p>
      <p>
        Certain special edition Hedgies will not have the hex code listed on
        OpenSea. In this case, click on the website link and go to that Hedgie’s
        page on Hedgie website.
      </p>
      <p>Copy the hex code as shown, and paste it into the field above.</p>
    </div>
  );
};

export default HowToFindHexCode;
