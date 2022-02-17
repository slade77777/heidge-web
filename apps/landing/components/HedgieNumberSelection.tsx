import React from 'react';
import { Button, wei2Eth } from 'shared';
import LoadingDots from './LoadingDots';
import usePrice from '../hooks/usePrice';
import useFreeHedgies from '../hooks/useFreeHedgies';

function genList(limit: number): Array<number> {
  if (limit > 0) {
    return new Array(limit).fill(0).map((_, index) => index + 1);
  }
  return [];
}

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
  const { freeQuantity, loadingFreeQuantity } = useFreeHedgies(account);
  const { price, isLoading } = usePrice(account, selectedValue);

  return (
    <div className={className}>
      <h4 className="font-bold text-teal-400 text-2xl">Get your Hedgie</h4>
      {loadingFreeQuantity && <LoadingDots size="lg" className="bg-teal-400" />}
      {!freeQuantity && !loadingFreeQuantity && (
        <p className="text-lg">You don&apos;t have free hedgies</p>
      )}
      {!!freeQuantity && (
        <>
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
              <TotalEth
                totalPriceWei={price?.totalPriceWei}
                loading={isLoading}
              />
            </span>
          </div>
          <Button
            className="w-64 btn btn-cyan uppercase disabled:bg-teal-300 disabled:shadow-none"
            onClick={onSubmit}
            disabled={isLoading || loading}
            loading={loading}
            spinner={<LoadingDots size="md" />}
          >
            {loading ? 'minting' : 'mint'}
          </Button>
        </>
      )}
    </div>
  );
};

export default HedgieNumberSelection;
