import Image from 'next/image';
import Title from '../../common/Title';
import { ReactNode } from 'react';

const milestones = [
  {
    id: '1',
    title: 'First 100 OG Hedgies sold',
    numberOfHdgSold: 100,
    content: [
      <a key="ct-1" className="text-teal-400">
        Unlocks the NN Artist Edition Hedgies to be sold at the auction on
        OpenSea
      </a>,
      <span key="content-2">Improved NFT Battle Arena launched</span>,
    ],
  },
  {
    id: '2',
    title: '500 Hedgies sold',
    numberOfHdgSold: 500,
    content: [
      <span key="key-2">
        Unlocks the first tournament with amazing prizes including a Cryptopunk
        (a nod to our past when{' '}
        <a className="text-teal-400">
          we sold a Cryptopunk at Hedgi Marketplace in April 2020 for Curio
          coin)
        </a>
      </span>,
    ],
  },
  {
    id: '3',
    title: '1000 Hedgies sold',
    numberOfHdgSold: 1000,
    content: [
      'Unlocks welcoming other NFT projects to join our NFT Battle Arena',
      'The first inter-project tournament',
    ],
  },
  {
    id: '4',
    title: '2500 Hedgies sold',
    numberOfHdgSold: 2500,
    content: [
      'Special edition 2018 reserve Hedgies are randomly airdropped to NN lucky OG Hedgie holders',
    ],
  },
  {
    id: '5',
    title: 'All 5K Hedgies sold',
    numberOfHdgSold: 5000,
    content: [
      'Unlocks the NFT Battle Arena for more projects',
      'Second interproject tournament',
      'New features and improvements are continuously launched',
      'Curio coin minted on chain, and listed on Uniswap or similar decentralized platform in a trading pair with ETH',
    ],
  },
];

type MileStoneType = {
  title: string;
  numberOfHdgSold: number;
  content: ReactNode[];
  type: 'desktop' | 'mobile';
};

const MileStone = ({
  numberOfHdgSold,
  content,
  title,
  type,
}: MileStoneType) => {
  if (type === 'mobile') {
    return (
      <div className="grid grid-cols-[auto,1fr] gap-x-5 md:gap-x-8">
        <div className="mt-1 md:ml-2 text-lg md:text-2xl text-teal-400 font-semibold border-4 border-teal-400 rounded-full w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
          {numberOfHdgSold}
        </div>
        <div className="text-left prose-sm">
          <h4 className="font-semibold text-fuchsia-900 md:text-lg">{title}</h4>
          <ul className="pl-0">
            {content.map((ct, index) => (
              <li key={index} className="text-left">
                {ct}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 items-center gap-x-8 group first:pt-3">
      <div className="group-odd:order-2 group-even:order-1 flex items-center group-even:justify-self-end">
        <div className="group-odd:pr-8 group-even:pl-8 block text-3xl font-semibold text-teal-400 group-odd:order-2 group-even:order-3">
          {numberOfHdgSold}
        </div>
        <div className="group-odd:order-2 group-even:order-1 group-odd:text-left group-even:text-right">
          <h4 className="font-semibold text-fuchsia-900 text-lg">{title}</h4>
          <div className="prose">
            {content.map((text, index) => (
              <div key={index} className="grid grid-cols-[auto,1fr]">
                <span className="group-odd:order-none group-even:order-1 w-[6px] h-[6px] mt-[10px] group-even:ml-2 group-odd:mr-2 inline-block bg-teal-400 rounded-full" />
                <span className="inline-block">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-300 group-odd:order-1 group-even:order-3" />
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="relative grid-cols-1 gap-y-3 hidden lg:grid">
      {milestones.map((mt) => (
        <MileStone key={mt.id} {...mt} type="desktop" />
      ))}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/subtract.svg"
          width={48}
          height={761}
          alt="subtract"
        />
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="lg:hidden">
      <Image
        src="/images/roadmap.png"
        width={345}
        height={369}
        objectFit="contain"
        alt="roadmap"
      />
      <div className="pt-5 px-4 md:px-4 grid grid-cols-1 gap-y-10">
        {milestones.map((mt) => (
          <MileStone key={mt.id} {...mt} type="mobile" />
        ))}
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="bg-slate-100" id="roadmap">
      <div className="mx-auto max-w-5xl text-center pt-16 pb-16 md:pb-20">
        <Title>Roadmap</Title>
        <Desktop />
        <Mobile />
      </div>
    </div>
  );
};

export default Roadmap;
