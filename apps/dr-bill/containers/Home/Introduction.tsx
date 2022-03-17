import {theme} from '@nextui-org/react';
import Image from 'next/image';
import {Heading, Paragraph} from '../../components/CustomText';
import MoreLink from '../../components/MoreLink';

export default function Introduction() {
  return (
    <div className="grid grid-cols-12 md:gap-10 lg:gap-12">
      <div className="md:order-last col-span-full md:col-span-6 lg:col-span-7 flex flex-col">
        <Heading> Dr. Bill, the OG of Generative Art </Heading>
        <div className="md:hidden w-full aspect-h-1 aspect-w-1 relative mt-6">
          <Image src="/assets/about/avatar.png" layout="fill" alt="avatar" objectFit="cover"/>
        </div>
        <Paragraph css={{marginTop: '24px'}}>
          Dr. Bill Kolomyjec has been involved in Generative Art from the very beginning of the form. As one of
          the earliest pioneers of the medium he started making computer art in the early 70’s.
        </Paragraph>
        <div className="self-end">
          <MoreLink href="/about" content="Learn more"/>
        </div>
      </div>
      <div className="hidden md:block col-span-full md:col-span-6 lg:col-span-5">
        <div className="w-full aspect-h-5 aspect-w-4 relative md:mr-[50px]">
          <div
            className="hidden md:block absolute w-full h-full border rotate-[351.77deg] top-0 left-0"
            style={{borderColor: theme.colors.text.value}}
          />
          <Image src="/assets/about/avatar.png" layout="fill" alt="avatar" objectFit="cover"/>
        </div>
      </div>
    </div>
  );
}

