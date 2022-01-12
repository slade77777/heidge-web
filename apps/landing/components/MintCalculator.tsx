import { useMemo } from 'react';
import { wei2Eth } from 'shared';
import usePrice from '../hooks/usePrice';

const MintCalculator = ({ quantity }: { quantity: number }) => {
  const { price, isLoading } = usePrice();

  const ethPrice = useMemo(() => {
    if (!price) {
      return '0.00';
    }

    return parseFloat(wei2Eth(price.hedgiePriceWei.toString())).toFixed(2);
  }, [price]);

  const dollarTotal = useMemo(() => {
    return (quantity * (price?.gasPriceCent + price?.hedgiePriceCent)) / 100;
  }, [price?.gasPriceCent, price?.hedgiePriceCent, quantity]);

  return (
    <span className="text-lg lg:text-2xl text-gray-700">
      {isLoading ? '0.00' : ethPrice}Ξ +{' '}
      <span className="text-gray-600">gas</span> = $
      {isLoading ? 'Loading...' : dollarTotal.toFixed(2)}
    </span>
  );
};

export default MintCalculator;
