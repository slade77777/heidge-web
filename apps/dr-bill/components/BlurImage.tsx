import React, { useState } from 'react';
import Image from 'next/image';
import { classNames } from 'shared/utils';

const BlurImage = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt?: string;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`${
        className || 'aspect-w-1 aspect-h-1'
      } w-full overflow-hidden`}
    >
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="contain"
        className={classNames(
          'bg-white duration-700 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-105 blur-md grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
