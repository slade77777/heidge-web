import React from 'react';
import { classNames } from 'shared/utils';

const DOTS = new Array(3).fill(0);

const SIZES = {
  sm: 'w-1 h-1',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
  xl: 'w-5 h-5',
};

const AnimationsDelay = ['0', '0.2s', '0.4s'];

const LoadingDots = ({
  size,
  className,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) => {
  return (
    <span className="inline-flex space-x-0.5 pl-2">
      {DOTS.map((dot, index) => (
        <span
          key={index}
          className={classNames(
            'bg-gray-100 inline-block rounded-full animate-loadingDot',
            SIZES[size || 'sm'],
            className,
          )}
          style={{ animationDelay: AnimationsDelay[index] }}
        />
      ))}
    </span>
  );
};

export default LoadingDots;
