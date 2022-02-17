import React from 'react';
import { OPENSEA_URL } from '../constants';
import Image from 'next/image';

const HowToFindHexCode = () => {
  return (
    <div className="prose mt-3 lg:prose-lg border rounded shadow-md p-4 prose-a:text-teal-400 prose-a:hover:text-fuchsia-900 prose-a:hover:cursor-pointer">
      <p>
        On{' '}
        <a href={OPENSEA_URL} target="_blank" rel="noreferrer">
          OpenSea
        </a>{' '}
        on a given Hedgie detail page you will see hex code like so. Copy it,
        and paste into the field above.
      </p>
      <Image
        src="/images/hex-code.png"
        width={716}
        height={280}
        objectFit="contain"
        alt="hex-code"
      />
      <p>
        Certain special edition Hedgies will not have the hex code listed on
        OpenSea. In this case, click on the website link and go to that Hedgie’s
        page on Hedgie website.
      </p>
      <Image
        src="/images/special-hex-code.png"
        width={710}
        height={280}
        alt="special-hex-code"
        objectFit="contain"
      />
      <p>Copy the hex code as shown, and paste it into the field above.</p>
      <Image
        src="/images/special-hedgie-site.png"
        width={710}
        height={280}
        objectFit="contain"
        alt="special-hedgie-site"
      />
    </div>
  );
};

export default HowToFindHexCode;
