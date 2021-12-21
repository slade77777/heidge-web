import Title from '../../common/Title';
import Image from 'next/image';

const ARR = [
  {
    id: '1',
    name: 'Train & Boost',
    content:
      'Once you get your Hedgie, send it to journeys to boost its powers and level-up. Get resources and build furniture in Hedgie House to reduce the recovery time. Accumulate $HDG coin.',
    img: '/images/about/train_and_boost.svg',
  },
  {
    id: '2',
    name: 'NFT Battle Arena',
    content:
      'Participate in battles and tournaments to win amazing prizes. Immediately available for Hedgie owners, and later for other NFT projects as well.',
    img: '/images/about/nft_battle_arena.png',
  },
  {
    id: '3',
    name: 'Marketplace',
    content:
      'Spend $HDG coin on the coolest and trendiest NFTs and other offers in our marketplace.',
    img: '/images/about/marketplace.svg',
  },
  {
    id: '4',
    name: '$HDG Coin',
    content:
      'Spend it in the marketplace, trade for ETH on Uniswap or another decentralized service, stake for governance, and unlock exclusive benefits down the road.',
    img: '/images/about/hdg_coin.png',
  },
  {
    id: '5',
    name: 'Community Fund',
    content:
      'We will place 20% of all proceeds from the sale of OG Hedgie collection into the community fund to be used for giveaways, promotions and exclusive benefits for OG Hedgie holders.',
    img: '/images/about/community_fund.svg',
  },
];

const AboutTheGame = () => {
  return (
    <div className="bg-slate-100 py-16" id="game">
      <div className="mx-auto max-w-5xl text-center">
        <Title className="pb-1">About the Game</Title>
        <span className="text-sm">
          Hedgie is much more than collecting cute creatures on the blockchain
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
