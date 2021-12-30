import { ReactNode } from 'react';
import { classNames } from '../utils';

type Props = {
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  spinner?: ReactNode;
};

const Button = ({
  spinner,
  disabled,
  loading,
  children,
  onClick,
  className,
}: Props) => {
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
      {loading && spinner}
    </button>
  );
};

export default Button;
