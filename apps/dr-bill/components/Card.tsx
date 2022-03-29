import Image from 'next/image';
import { useState } from 'react';
import { classNames } from 'shared/utils';
import { Ratio } from '../types';
import CustomLink from './CustomLink';

function Card({
  href,
  imageSrc,
  title,
  description,
  tag,
  ratio,
  isExternalLink,
  imgAlt,
}: {
  href?: string;
  imageSrc: string;
  imgAlt?: string;
  description?: string;
  title: string;
  tag?: string;
  ratio?: Ratio;
  isExternalLink?: boolean;
}) {
  const [isLoading, setLoading] = useState(true);
  return (
    <CustomLink href={href} isExternalLink={isExternalLink}>
      <div className="border border-black">
        <div
          className={`${
            ratio || 'aspect-w-1 aspect-h-1'
          } w-full overflow-hidden bg-transparent`}
        >
          <Image
            alt={imgAlt}
            src={imageSrc}
            layout="fill"
            objectFit="contain"
            className={classNames(
              'duration-700 ease-in-out group-hover:opacity-75',
              isLoading ? 'blur grayscale' : 'blur-0 grayscale-0',
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="px-5">
          <h3 className="mt-4 text-lg text-black">{title}</h3>
          <p className="mt-1 font-light line-clamp-5">{description}</p>
        </div>
      </div>
    </CustomLink>
  );
}

export default Card;
