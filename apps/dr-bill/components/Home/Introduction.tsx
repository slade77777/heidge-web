import { theme } from '@nextui-org/react';
import Image from 'next/image';
import { Heading, Paragraph } from '../CustomText';
import MoreLink from '../MoreLink';
import { Content } from '../../types';

const DrBillPortrait = ({ imgUrl }: { imgUrl?: string }) => (
  <Image src={imgUrl} layout="fill" alt="avatar" objectFit="cover" />
);

export default function Introduction({ data }: { data: Content }) {
  return (
    <div className="grid grid-cols-12 md:gap-10 lg:gap-12">
      <div className="md:order-last col-span-full md:col-span-6 lg:col-span-7 flex flex-col">
        <Heading>{data.title}</Heading>
        <div className="md:hidden w-full aspect-h-1 aspect-w-1 relative mt-6">
          <DrBillPortrait imgUrl={data.image} />
        </div>
        <Paragraph css={{ marginTop: '24px' }}>{data.text}</Paragraph>
        <div className="self-end">
          <MoreLink href="/about" content="Learn more" />
        </div>
      </div>
      <div className="hidden md:block col-span-full md:col-span-6 lg:col-span-5">
        <div className="w-full aspect-h-5 aspect-w-4 relative md:mr-[50px]">
          <div
            className="hidden md:block absolute w-full h-full border rotate-[351.77deg] top-0 left-0"
            style={{ borderColor: theme.colors.text.value }}
          />
          <DrBillPortrait imgUrl={data.image} />
        </div>
      </div>
    </div>
  );
}
