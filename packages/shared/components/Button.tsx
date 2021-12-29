import { ReactNode } from 'react';
import { classNames } from '../utils';
import LoadingDots from './LoadingDots';

type Props = {
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ disabled, loading, children, onClick, className }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        className,
        loading || disabled ? 'cursor-not-allowed' : '',
      )}
      disabled={loading || disabled}
    >
      {children}
      {loading && <LoadingDots size="md" />}
    </button>
  );
};

export default Button;
