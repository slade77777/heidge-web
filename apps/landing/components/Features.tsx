import { ReactNode } from 'react';
import { Title, Button } from 'shared';
import { Curio } from 'shared/icons';
import CustomImage from './CustomImage';

const marketPlaces = [
  {
    id: 'lion',
    title: 'Lion by unmaskedfire',
    subTitle: 'Drawing with a razor blade on black photo paper.',
    curio: 5000,
    url: 'https://www.hedgie.io/product/d4365ebc-f36b-45e6-8ec7-2e0aa57591f9',
    imgUrl: '/images/features/lion.png',
  },
  {
    id: 'unmaskedfire',
    title: 'Vitalik in Hedgies Raffle',
    subTitle: 'WIN 1 edition of this artwork with Curio raffle',
    curio: 100,
    url: 'https://www.hedgie.io/product/afc7f3d5-5911-42df-ada1-1346d480a5a9',
    imgUrl:
      'https://img.hedgie.io/hedgie-general-assets/77869d86-88cf-486d-9abc-71e147a37d36/suborg-v.jpg',
  },
];

const Marketplace = () => {
  return (
    <div className="bg-slate-100 rounded-md text-black flex items-center p-6 space-x-6">
      {marketPlaces.map((mk) => (
        <div className="space-y-3 w-full" key={mk.id}>
          <div className="aspect-w-1 aspect-h-1 relative">
            <CustomImage src={mk.imgUrl} layout="fill" objectFit="contain" />
          </div>
          <h4 className="font-semibold">{mk.title}</h4>
          <a className="text-fuchsia-900 text-sm">{mk.subTitle}</a>
          <div className="flex items-center space-x-2">
            <Curio className="text-yellow-300" />
            <span>{mk.curio}</span>
          </div>
          <a className="px-4 py-2 bg-fuchsia-900 rounded-md inline-block mt-2 text-white font-bold">
            Buy
          </a>
        </div>
      ))}
    </div>
  );
};

const Feature = ({
  title,
  content,
  imgUrl,
  component,
}: {
  title: string;
  content: string;
  imgUrl?: string;
  component?: ReactNode | null;
}) => {
  return (
    <div className="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-16 group items-center">
      <div className="group-odd:order-none lg:group-even:order-1 pb-4 lg:pb-0">
        <Title>{title}</Title>
        <p className="whitespace-pre-wrap text-sm md:text-base">{content}</p>
      </div>
      {imgUrl ? (
        <div className="aspect-w-4 aspect-h-3 relative">
          <CustomImage src={imgUrl} layout="fill" objectFit="contain" />
        </div>
      ) : (
        component
      )}
    </div>
  );
};

const CONTENT = [
  {
    id: '1',
    title: 'The Game',
    content:
      'It’s been a fully operational P2E (Play-to-Earn) game since 2018. Send your Hedgie on journeys to collect resources, loot and gain XP. Build your Hedgie house to preserve energy. Trade loot for Curio coin or consume for temporary boosts (very useful in journeys and battles!).',
    imgUrl: '/images/features/the_game.png',
  },
  {
    id: '2',
    title: 'The NFT Battle Arena',
    content:
      "Currently Hedgies compete against each other in the battle arena to see who's the strongest. Before starting the battle, players select the amount of Curio they want to bet against their opponent. The winner takes all!\n" +
      '\n' +
      'The NFT Battle Arena will soon open for other NFT projects! Envision your Hedgie battling against an Ape, or a Punk, or maybe a Hashmask? We will carefully select and onboard projects into the platform. The holders of other NFTs will have to pay a one-time access fee to enter the NFT battle arena.\n',
    imgUrl: '/images/features/the_nft_battle_arena.png',
  },
  {
    id: '3',
    title: 'The Marketplace',
    content:
      'Once you accumulate enough Curio coin, you can spend it in our marketplace for NFT art and collectibles. Every week we fill our marketplace with new offers.  Did you know that back in April 2020 one of our players redeemed their Curio coin for a CryptoPunk? Yeah, we have a good eye for what’s going to be trendy 😉',
    component: <Marketplace />,
  },
];

const Features = () => {
  return (
    <div className="bg-gradient-to-l from-fuchsia-900 to-blue-900 text-white">
      <div className="mx-auto max-w-5xl space-y-12 py-12">
        {CONTENT.map((feature) => (
          <Feature
            key={feature.id}
            title={feature.title}
            imgUrl={feature.imgUrl || ''}
            content={feature.content}
            component={feature.component}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
