import { ReactNode } from 'react';
import Image from 'next/image';
import { Title } from 'shared';

const milestones = [
  {
    id: '1',
    title: 'First 100 OG Hedgies sold',
    numberOfHdgSold: 100,
    content: [
      <span key="1-launch">OG Hedgie edition launches</span>,
      <span key="ct-1">
        Special Artist Collab Hedgies auctioned on{' '}
        <a
          href="https://opensea.io/collection/hedgie"
          target="_blank"
          className="text-teal-400"
          rel="noreferrer"
        >
          OpenSea (link to auction page)
        </a>
      </span>,
      <span key="content-2">Improved NFT Battle Arena launched</span>,
    ],
  },
  {
    id: '2',
    title: '500 Hedgies sold',
    numberOfHdgSold: 500,
    content: [
      <span key="2-key-1">Train your Hedgies and get ready</span>,
      <span key="key-2">
        Once minimum 500 OG Hedgies are sold, the first tournament is scheduled
      </span>,
      <span key="2-key-3">Battle other players and win amazing prizes!</span>,
    ],
  },
  {
    id: '3',
    title: '1000 Hedgies sold',
    numberOfHdgSold: 1000,
    content: [
      'Welcoming other NFT projects to join our Battle Arena',
      'The first inter-project tournament is scheduled',
    ],
  },
  {
    id: '4',
    title: '2500 Hedgies sold',
    numberOfHdgSold: 2500,
    content: ['Hedgie Art Club launches', 'More on that here'],
  },
  {
    id: '5',
    title: 'All 5K Hedgies sold',
    numberOfHdgSold: 5000,
    content: [
      'New features and improvements are continuously launched',
      'Coin minted on chain, and listed on Uniswap or similar decentralised platform',
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
