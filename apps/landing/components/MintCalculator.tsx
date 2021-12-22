import { useMemo } from 'react';
import { wei2Eth } from 'shared';

const MintCalculator = ({
  quantity,
  gasPriceWei,
}: {
  quantity: number;
  gasPriceWei: number;
}) => {
  const [total, price] = useMemo(() => {
    const convertedPrice = wei2Eth(gasPriceWei);
    const price = (quantity * parseFloat(convertedPrice)).toFixed(5);
    return [price, convertedPrice];
  }, [quantity, gasPriceWei]);

  return (
    <span className="text-2xl text-gray-700">
      {price}Ξ = {total}Ξ
    </span>
  );
};

export default MintCalculator;
