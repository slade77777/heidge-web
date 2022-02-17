import Image from 'next/image';
import {Text, theme} from '@nextui-org/react';
import {Heading} from '../Text';
import {ReactNode} from 'react';
import {classNames} from 'shared/utils';

type Props = {
  images: {
    src: string;
    alt?: string;
  }[];
  tag?: string;
  children: ReactNode;
}
export default function Artwork({images, tag, children}: Props) {
  return (
    <div
      className={classNames(`relative max-w-[${334 * images.length}px] border`)}
      style={{borderColor: theme.colors.text.value}}>
      <div className="flex flex-row">
        {images.map(({src, alt = 'image'}, i) =>
          <div className="relative w-[334px] h-[334px]" key={i}>
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
    </div>
  )
}
