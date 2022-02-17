import {theme} from '@nextui-org/react';
import Image from 'next/image';
import {Heading, Paragraph} from '../../components/Text';
import MoreLink from '../../components/MoreLink';

export default function Introduction() {
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="w-full aspect-h-1 aspect-w-1 aspect-h-5 aspect-w-4 relative md:mr-[50px]">
          <div
            className="hidden md:block absolute w-full h-full border rotate-[351.77deg] top-0 left-0"
            style={{borderColor: theme.colors.text.value}}
          />
          <Image src="/assets/about/avatar.png" layout="fill" alt="avatar" objectFit="cover"/>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-7">
        <Heading> Dr. Bill, the OG of Generative Art </Heading>
        <Paragraph css={{marginTop: '24px'}}>
          Dr. Bill Kolomyjec has been involved in Generative Art from the very beginning of the form. As one of
          the
          earliest pioneers of the medium he started making computer art in the early 70’s.
        </Paragraph>
        <MoreLink href="/about" content="Learn more"/>
      </div>
    </div>
  );
};

