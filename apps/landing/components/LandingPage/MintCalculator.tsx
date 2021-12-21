import { useMemo } from 'react';

const MintCalculator = ({ quantity }: { quantity: number }) => {
  const price = useMemo(() => {
    if (quantity) {
      return (quantity * 0.06).toFixed(2);
    }
  }, [quantity]);

  return <span className="text-2xl text-gray-700">0.06Ξ = {price}Ξ</span>;
};

export default MintCalculator;
