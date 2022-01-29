import { ReactNode } from 'react';
import { classNames } from '../utils';

const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={classNames(
        'font-black text-3xl text-teal-400 py-5',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
