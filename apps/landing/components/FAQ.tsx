import Image from 'next/image';
import React, { ReactNode, useRef, useState } from 'react';
import { Title } from 'shared';
import { Arrow } from 'shared/icons';

const QUESTIONS = [
  {
    id: 'q1',
    question: 'What is Hedgie exactly?',
    answer: (
      <p>
        Hedgie is an OG NFT project, launched in 2018 on the heels of
        CryptoKitties. It’s a P2E game where you train your Hedgie by going on
        journeys, collect loot, level up, participate in battles and accumulate
        Curio coin. The project had good momentum in 2018 and then plateaued all
        through ‘crypto winter’. We’ve always believed in it and never abandoned
        our early players, genesis Hedgie holders. Now, we’re back in full dev
        mode, and ready to embrace new players.
      </p>
    ),
  },
  {
    id: 'q2',
    question: 'I heard Hedgies used to be given away for free?',
    answer: (
      <p>
        When we first launched in 2018 people could join and get a randomly
        generated free Hedgie (Essential Edition, bare Hedgie with no additional
        attributes). Recently those players had the last chance to mint their
        free Hedgies. Some did, and those who didn’t will never have a chance to
        mint them again. These Hedgies will remain playable, but with limited
        capacity. There are about 24K free Hedgies in the game.{' '}
      </p>
    ),
  },
  {
    id: 'q3',
    question: 'Why should I buy a Hedgie?',
    answer: (
      <p>
        Hedgie is a true OG project, started in late 2017 and launched in spring
        2018. Unlike most other NFT projects it already has amazing utility, a
        P2E game that allows players to participate in battles, make Curio coin
        and spend it on NFTs and other offers in our marketplace. This is a
        unique opportunity to enter an OG project at the ground level.
      </p>
    ),
  },
  {
    id: 'q4',
    question: 'What is the NFT Battle Arena you’re talking about?',
    answer: (
      <p>
        This is our flagship product, offering great entertainment utility for
        your Hedgie. You stake Curio coin to go head-to-head with another
        Hedgie, and the winner takes all. We will soon open this for other
        carefully selected NFT projects to participate. There will be
        cross-project tournaments with amazing prizes. Train your Hedgie to be
        ready!
      </p>
    ),
  },
  {
    id: 'q5',
    question: 'What are you doing with the OG Hedgie collection proceeds?',
    answer: (
      <p>
        Give back to the community! We reinvest profits into building and
        improving the project so our players see their assets go up in value.
        We’re also creating a community fund to be used for tournament prizes,
        giveaways, promotions and exclusive benefits for OG Hedgie holders&apos;
      </p>
    ),
  },
  {
    id: 'q6',
    question:
      'As an OG project from 2018, what is your claim to fame from the past?',
    answer: (
      <div>
        <p>
          Hedgie was the first project to allow purchasing NFT for fiat. The
          world was completely different back then, and most people did not know
          what a Metamask wallet is, or how to buy Ether. We also sold a
          Cryptopunk in our marketplace for Curio coin in April 2020.
        </p>
        <Image
          src="/images/hedgie-twist.png"
          width={300}
          height={500}
          objectFit="contain"
          alt="hedgie-twist"
        />
      </div>
    ),
  },
  {
    id: 'q7',
    question: 'What is Curio coin?',
    answer: (
      <p>
        Curio is the original name of our in-game coin. This is the coin you
        make as a Hedgie player, the coin you stake to participate in battles,
        and the coin you can spends on other NFTs in our Marketplace.
      </p>
    ),
  },
  {
    id: 'q8',
    question:
      'What is the tokenomics Curio coin and when is it going to be minted?',
    answer: (
      <p>
        This is work in progress, we’re workin on it as fast as we can, and will
        share the announcement once we’re ready. Minting Curio coin on chain and
        listing it on Uniswap or similar service are critical milestones in our
        2022 roadmap.
      </p>
    ),
  },
];

const arrowUp =
  'transform -rotate-90 text-slate-400 w-3 transition-all ease-in-out duration-300';
const arrowDown =
  'transform rotate-90 text-teal-400 w-3 transition-all ease-in-out duration-300';

const activeText =
  'text-left font-semibold text-fuchsia-900 transition-all ease-in-out duration-300';
const text =
  'text-left font-semibold text-teal-400 transition-all ease-in-out duration-300';

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) => {
  const contentEl = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  function expandView() {
    setOpen(!open);
  }

  return (
    <div className="bg-white shadow-hdg py-2 px-4 rounded-lg">
      <button
        className="grid grid-cols-[1fr,auto] gap-x-3 items-center w-full"
        onClick={expandView}
      >
        <span className={open ? text : activeText}>{question}</span>
        <Arrow className={open ? arrowDown : arrowUp} />
      </button>
      <div
        ref={contentEl}
        className="transition-all duration-300 ease overflow-hidden pr-10"
        style={
          open ? { height: contentEl.current?.scrollHeight } : { height: 0 }
        }
      >
        {answer}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="mx-auto max-w-5xl py-16 px-4 lg:px-0" id="faq">
      <Title className="text-center">FAQ</Title>
      <div className="space-y-5">
        {QUESTIONS.map((qs) => (
          <Question key={qs.id} {...qs} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
