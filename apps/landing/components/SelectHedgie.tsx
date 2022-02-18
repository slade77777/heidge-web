import React from 'react';
import LoadingDots from './LoadingDots';
import { wei2Eth } from 'shared';

function genList(limit: number): Array<number> {
  if (limit > 0) {
    return new Array(limit).fill(0).map((_, index) => index + 1);
  }
  return [];
}

type Props = {
  onSelect?: (no: number) => void;
  selectedValue?: number;
  loading?: boolean;
  freeQuantity: number;
  totalPriceWei?: number;
  isLoadingPrice?: boolean;
};

const TotalEth = ({
  totalPriceWei,
  loading,
}: {
  totalPriceWei: number;
  loading: boolean;
}) => {
  return (
    <span className="font-bold">
      {loading || !totalPriceWei ? (
        <span className="inline-block w-16">
          <LoadingDots className="bg-teal-400" />
        </span>
      ) : (
        wei2Eth(totalPriceWei.toString())
      )}{' '}
      <span className="text-base lg:text-lg">ETH</span>
    </span>
  );
};

const SelectHedgie = ({
  selectedValue,
  onSelect,
  loading,
  freeQuantity,
  totalPriceWei,
  isLoadingPrice,
}: Props) => {
  return (
    <div className="space-x-3 flex items-center justify-center">
      <select
        value={selectedValue}
        onChange={(e: any) => onSelect(e.target.value)}
        className="select"
        placeholder="Number of Hedgie"
        disabled={loading}
      >
        {genList(freeQuantity).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <span className="text-2xl text-gray-500">&#215;</span>
      <span className="text-lg lg:text-2xl text-gray-700">
        <span className="text-gray-700">gas</span> ={' '}
        <TotalEth totalPriceWei={totalPriceWei} loading={isLoadingPrice} />
      </span>
    </div>
  );
};

export default SelectHedgie;
