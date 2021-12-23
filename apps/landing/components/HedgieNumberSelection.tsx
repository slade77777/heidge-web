import React from 'react';
import { Button, Spinner } from 'shared';
import MintCalculator from './MintCalculator';
import usePrice from '../hooks/usePrice';

const FIXED_NUMBER = new Array(20).fill(0).map((_, index) => index + 1);

type Props = {
  onSelect?: (no: number) => void;
  selectedValue?: number;
  className?: string;
};
const HedgieNumberSelection = ({
  className,
  onSelect,
  selectedValue,
}: Props) => {
  const { price, isLoading } = usePrice();

  return (
    <div className={className}>
      <h4 className="font-bold text-teal-400 text-2xl">Get your Hedgie</h4>
      <div className="space-x-3">
        <select
          onChange={(e: any) => onSelect(e.target.value)}
          className="border-none w-20 text-xl py-2 px-3 ring-1 ring-teal-400 shadow-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-400 caret-teal-400"
          placeholder="Number of Hedgie"
        >
          {FIXED_NUMBER.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <span>x</span>
        {!!price?.gasPriceWei && (
          <MintCalculator
            quantity={selectedValue}
            gasPriceWei={price.gasPriceWei.toString()}
          />
        )}
      </div>
      <Button className="w-64 btn btn-cyan uppercase">mint</Button>
    </div>
  );
};

export default HedgieNumberSelection;
