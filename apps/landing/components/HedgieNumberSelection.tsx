import React from 'react';
import { Button } from 'shared';
import LoadingDots from './LoadingDots';
import usePrice from '../hooks/usePrice';
import useFreeHedgies from '../hooks/useFreeHedgies';
import SelectHedgie from './SelectHedgie';

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
      {loadingFreeQuantity ? (
        <LoadingDots size="lg" className="bg-teal-400" />
      ) : (
        <>
          {freeQuantity < 0 && (
            <div>
              <span className="text-6xl">☕</span>
              <p className="pt-2">
                Please wait 24h since previous minting
              </p>
            </div>
          )}
          {freeQuantity === 0 && (
            <div>
              <span className="text-4xl">🙁</span>
              <p className="text-lg pt-1 text-fuchsia-900">
                You don&apos;t have free hedgies
              </p>
            </div>
          )}
          {freeQuantity > 0 && (
            <>
              <SelectHedgie
                freeQuantity={freeQuantity}
                loading={loading}
                isLoadingPrice={isLoading}
                onSelect={onSelect}
                selectedValue={selectedValue}
                totalPriceWei={price?.totalPriceWei}
              />
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
        </>
      )}
    </div>
  );
};

export default HedgieNumberSelection;
