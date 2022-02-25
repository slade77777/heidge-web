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
    <div className="mt-2">
      <span>Can Take Gen3:</span>{' '}
      <span className="font-bold">
        {canTakeGen3 === 1 ? (
          <span className="bg-teal-100 text-teal-500 rounded-full px-2 py-1 text-lg">
            👌 Yes
          </span>
        ) : (
          <span className="bg-red-100 rounded-full px-2 py-1 text-red-400 text-lg">
            No
          </span>
        )}
      </span>
    </div>
  );
};

export default CheckingResult;
