import { ReactNode } from 'react';
import Image from 'next/image';
import { Title } from 'shared';

const milestones = [
  {
    id: '1',
    title: 'Final primary market release',
    numberOfHdgSold: 100,
    icon: '/icons/curio.svg',
    content: [
      <span key="1-launch">OG Hedgie edition launches</span>,
      <span key="ct-1">
        Special Artist Collab Hedgies auctioned on{' '}
        <a
          href="https://opensea.io/collection/hedgie"
          target="_blank"
          className="text-teal-400 hover:text-fuchsia-900"
          rel="noreferrer"
        >
          OpenSea
        </a>
      </span>,
      <span key="content-2">Improved NFT Battle Arena launched</span>,
    ],
  },
  {
    id: '2',
    icon: '/icons/curio.svg',
    title: 'First official tournament',
    numberOfHdgSold: 500,
    content: [
      <span key="2-key-1">Train your Hedgies and get ready</span>,
      <span key="key-2">
        Once minimum 1,000 OG Hedgies are sold, the first tournament is
        scheduled
      </span>,
      <span key="2-key-3">Battle other players and win amazing prizes!</span>,
    ],
  },
  {
    id: '3',
    icon: '/icons/curio.svg',
    title: 'Other projects enter',
    numberOfHdgSold: 1000,
    content: [
      'Welcoming other NFT projects to join our Battle Arena',
      'The first inter-project tournament is scheduled',
    ],
  },
  {
    id: '4',
    icon: '/icons/curio.svg',
    title: 'Hedgie Art Club',
    numberOfHdgSold: 2500,
    content: ['Hedgie Art Club launches', 'More on that here'],
  },
  {
    id: '5',
    title: 'Coin on-chain',
    numberOfHdgSold: 5000,
    icon: '/icons/curio.svg',
    content: [
      'Coin minted on chain, and listed on Uniswap or similar platform',
      'New features and improvements to game mechanics and visuals are launched',
    ],
  },
];

type MileStoneType = {
  title: string;
  numberOfHdgSold: number;
  content: ReactNode[];
  type: 'desktop' | 'mobile';
  icon: string;
};

const MileStone = ({ content, title, type }: MileStoneType) => {
  if (type === 'mobile') {
    return (
      <div className="grid grid-cols-[auto,1fr] gap-x-5 md:gap-x-8">
        {/*<div className="mt-1 md:ml-2 text-lg md:text-2xl text-teal-400 font-semibold border-4 border-teal-400 rounded-full w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">*/}
        {/*  {numberOfHdgSold}*/}
        {/*</div>*/}
        <div className="text-left prose-sm">
          <h4 className="font-bold text-fuchsia-900 text-lg">{title}</h4>
          <ul className="pl-2">
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
    <div className="grid grid-cols-2 items-center gap-x-44 group first:pt-3">
      <div className="group-odd:order-2 group-even:order-1 flex items-center group-even:justify-self-end">
        {/*<div className="group-odd:pr-8 group-even:pl-8 block text-3xl font-semibold text-teal-400 group-odd:order-2 group-even:order-3">*/}
        {/*  <div className="w-12" />*/}
        {/*</div>*/}
        <div className="group-odd:order-2 group-even:order-1 group-odd:text-left group-even:text-right">
          <h4 className="font-semibold text-fuchsia-900 text-lg">{title}</h4>
          <div className="prose">
            {content.map((text, index) => (
              <div
                key={index}
                className="grid group-odd:grid-cols-[auto,1fr] group-even:grid-cols-[1fr,auto]"
              >
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
    <div className="relative grid-cols-1 gap-y-6 hidden lg:grid">
      {milestones.map((mt) => (
        <MileStone key={mt.id} {...mt} type="desktop" />
      ))}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/roadmap-path.png"
          width={150}
          height={630}
          objectFit="contain"
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
