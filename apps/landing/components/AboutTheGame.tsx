import Image from 'next/image';
import { Title } from 'shared';

const ARR = [
  {
    id: '1',
    name: 'Train & Boost',
    content:
      'Send your Hedgie to journeys to boost its powers and level-up. Get resources and build furniture in Hedgie House to reduce the recovery time. Accumulate Curio coin.',
    img: '/images/about/about2.svg',
  },
  {
    id: '2',
    name: 'NFT Battle Arena',
    content:
      'Participate in battles and tournaments to win amazing prizes. Immediately available for Hedgie owners, and soon for other NFT holders as well.',
    img: '/images/about/about5.svg',
  },
  {
    id: '3',
    name: 'Marketplace',
    content:
      'Spend Curio coin on the cool and trendy NFTs and other offers in our marketplace.',
    img: '/images/about/about4.svg',
  },
  {
    id: '4',
    name: 'Curio Coin',
    content:
      'Spend it in the marketplace now. Soon you will be able to trade on Uniswap or another decentralised exchange.',
    img: '/images/about/about1.svg',
  },
  {
    id: '5',
    name: 'Community Fund',
    content:
      '20% of sales of OG Hedgies go into the community fund to be used for tournament prizes, giveaways, promotions and exclusive benefits for Hedgie holders.',
    img: '/images/about/about3.svg',
  },
];

const AboutTheGame = () => {
  return (
    <div className="bg-slate-100 py-16" id="game">
      <div className="mx-auto max-w-5xl text-center">
        <Title className="pb-1">About the Game</Title>
        <span className="text-sm">
          With the P2E game live, Hedgie is much more than collecting cute
          creatures on the blockchain.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-10">
          {ARR.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Image
                src={item.img}
                width={93}
                height={93}
                objectFit="contain"
                alt="the game"
              />
              <h4 className="font-semibold text-hgPurple py-3">{item.name}</h4>
              <p className="px-10 lg:px-1 text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTheGame;
