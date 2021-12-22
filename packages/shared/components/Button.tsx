import Spinner from './Spinner';
import { ReactNode } from 'react';
import { classNames } from '../utils';

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
      className={classNames(className, loading ? 'cursor-not-allowed' : 'btn')}
      disabled={loading || disabled}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
