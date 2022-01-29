import React from 'react';
import { Button } from 'shared';
import MintCalculator from './MintCalculator';
import LoadingDots from './LoadingDots';
import usePrice from '../hooks/usePrice';

const FIXED_NUMBER = new Array(10).fill(0).map((_, index) => index + 1);

type Props = {
  onSelect?: (no: number) => void;
  selectedValue?: number;
  className?: string;
  onSubmit?: () => void;
  loading?: boolean;
  account?: string;
};
const HedgieNumberSelection = ({
  className,
  onSelect,
  selectedValue,
  onSubmit,
  account,
  loading,
}: Props) => {
  const { price, isLoading } = usePrice(account, selectedValue);
  return (
    <div className={className}>
      <h4 className="font-bold text-teal-400 text-2xl">Get your Hedgie</h4>
      <div className="space-x-3">
        <select
          onChange={(e: any) => onSelect(e.target.value)}
          className="border-none w-20 text-lg lg:text-xl py-2 px-3 ring-1 ring-teal-400 shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400 caret-teal-400"
          placeholder="Number of Hedgie"
        >
          {FIXED_NUMBER.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <span>x</span>
        <MintCalculator price={price} isLoading={isLoading} />
      </div>
      <Button
        className="w-64 btn btn-cyan uppercase"
        onClick={onSubmit}
        disabled={isLoading || loading}
        loading={loading}
        spinner={<LoadingDots size="md" />}
      >
        {loading ? 'minting' : 'mint'}
      </Button>
    </div>
  );
};

export default HedgieNumberSelection;
