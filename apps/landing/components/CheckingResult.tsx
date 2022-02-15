import React from 'react';
import LoadingDots from './LoadingDots';
import { Loading } from '../types';

const CheckingResult = ({
  canTakeGen3,
  errorMsg,
  isLoading,
}: {
  canTakeGen3: number;
  errorMsg?: string;
  isLoading: Loading;
}) => {
  if (isLoading === 'none') return null;
  if (isLoading === 'loading') {
    return (
      <div className="pt-5">
        Checking <LoadingDots size="md" className="bg-teal-400" />
      </div>
    );
  }
  if (isLoading === 'error') {
    return <p className="text-red-400 mt-2">{errorMsg}</p>;
  }
  return (
    <div className="pt-5 text-left">
      <span>Can Take Gen3:</span>{' '}
      <span className="font-bold text-lg">
        {!!canTakeGen3 ? (
          <span className="text-teal-400">👌 Yet it is</span>
        ) : (
          <span className="text-red-400">No</span>
        )}
      </span>
      {!!canTakeGen3 && <p>Quantity: {canTakeGen3}</p>}
    </div>
  );
};

export default CheckingResult;
