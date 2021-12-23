import { useMemo } from 'react';
import { wei2Eth, sum } from 'shared';
import usePrice from '../hooks/usePrice';

const MintCalculator = ({ quantity }: { quantity: number }) => {
  const { price, isLoading } = usePrice();

  const [gasAndPrice, total] = useMemo(() => {
    if (!price) {
      return ['0.00', '0.00'];
    }
    const sumGasAndPrice = sum(
      price?.hedgiePriceWei.toString(),
      price.gasPriceWei.toString(),
    );

    return [
      wei2Eth(sumGasAndPrice),
      quantity * parseFloat(wei2Eth(sumGasAndPrice)),
    ];
  }, [price, quantity]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <span className="text-2xl text-gray-700">
      {gasAndPrice}Ξ = {total}Ξ
    </span>
  );
};

export default MintCalculator;
