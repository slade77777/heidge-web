import React, { ReactNode, useRef, useState } from 'react';
import Title from '../../common/Title';
import Arrow from '../../common/icons/Arrow';
import Image from 'next/image';

const QUESTIONS = [
  {
    id: 'q1',
    question: 'What is the legacy free-to-play situation?',
    answer:
      'Hedgie was the first project to allow purchasing NFT for fiat. We sold a Cryptopunk in our marketplace for Curio coin in April 2020. We have also sold an iPhone, many cool NFT artworks, Artvatars and other great offers.',
  },
  {
    id: 'q2',
    question:
      'What are you going to do about free Hedgies, and doesn’t it dilute the OG Hedgies value? ',
    answer:
      'What are you going to do about free Hedgies, and doesn’t it dilute the OG Hedgies value? ',
  },
  {
    id: 'q3',
    question: 'Wait, can my OG Hedgie dissolve too?',
    answer: 'Wait, can my OG Hedgie dissolve too?',
  },
  {
    id: 'q4',
    question: 'What about those free players who will be active?',
    answer: (
      <div>
        <Image width={320} height={360} src="/images/roadmap.png" alt="test" />
      </div>
    ),
  },
  {
    id: 'q5',
    question: 'Wait, can my OG Hedgie dissolve too?',
    answer: 'Wait, can my OG Hedgie dissolve too?',
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
