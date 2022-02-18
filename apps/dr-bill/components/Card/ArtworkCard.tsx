import Image from 'next/image';
import {Text} from '@nextui-org/react';
import {ReactNode} from 'react';
import {classNames} from 'shared/utils';
import RawCard from './RawCard';

type Props = {
  images: {
    src: string;
    alt?: string;
  }[];
  tag?: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
}
export default function ArtworkCard({images, tag, children, className, imageClassName}: Props) {
  return (
    <RawCard
      className={classNames('max-w-[334px]', className)}
      css={{border: '1px solid $text'}}
    >
      <div className="flex flex-row">
        {images.map(({src, alt = 'image'}, i) =>
          <div className={classNames('relative w-[334px] h-[334px]', imageClassName)} key={i}>
            <Image src={src} alt={alt} layout="fill" objectFit="cover"/>
          </div>,
        )}
      </div>
      {children}
      {!!tag &&
        <Text css={{
          fontSize: '$xs',
          lineHeight: '$sm',
          background: '$text',
          color: '$background',
          position: 'absolute',
          fontWeight: 400,
          top: 0,
          right: 0,
          padding: '10px 20px',
        }}>{tag}</Text>
      }
    </RawCard>
  )
}
