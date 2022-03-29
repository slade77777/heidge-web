import { Text } from '@nextui-org/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/utils';
import CardRaw from './CardRaw';
import NextImage from './NextImage';
import CustomLink from './CustomLink';

type Props = {
  images: {
    src: string;
    alt?: string;
  }[];
  tag?: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
  href?: string;
  layout?: string;
  objectFit?: string;
  isExternalLink?: boolean;
};

export default function CardArtwork({
  images,
  tag,
  children,
  className,
  imageClassName,
  href,
  isExternalLink,
  ...props
}: Props) {
  return (
    <CustomLink href={href} isExternalLink={isExternalLink}>
      <CardRaw css={{ border: '1px solid $text' }} className={className}>
        <div className={classNames('relative', imageClassName)}>
          <NextImage src={images[0].src} alt={images[0].alt} {...props} objectFit="cover" />
        </div>
        <CardRaw
          css={{
            padding: '14px 22px !important',
            '@xs': {
              fontSize: '$lg',
              lineHeight: '$lg',
              padding: '18px 26px !important',
            },
            '@sm': {
              fontSize: '$sm',
              lineHeight: '$md',
              padding: '26px 34px !important',
            },
          }}
        >
          {children}
        </CardRaw>
        {!!tag && (
          <Text
            css={{
              fontSize: '$xs',
              lineHeight: '$sm',
              background: '$text',
              color: '$background',
              position: 'absolute',
              fontWeight: 400,
              top: 0,
              right: 0,
              padding: '10px 20px',
            }}
          >
            {tag}
          </Text>
        )}
      </CardRaw>
    </CustomLink>
  );
}
