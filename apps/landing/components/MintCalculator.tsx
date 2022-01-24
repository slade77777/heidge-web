import { useMemo } from 'react';
import { getAmountOfWei, useMetamask, wei2Eth } from 'shared';
// import usePrice from '../hooks/usePrice';
import useDiscountHedgies from '../hooks/useDiscountHedgies';
import { ETH_PRICE } from '../constants';

const MintCalculator = ({ quantity }: { quantity: number }) => {
  const { account } = useMetamask();
  // const { price, isLoading } = usePrice();

  const { price, isLoading } = useDiscountHedgies(account);

  // const ethPrice = useMemo(() => {
  //   if (!price) {
  //     return '0.00';
  //   }
  //
  //   return parseFloat(wei2Eth(price.hedgiePriceWei.toString())).toFixed(2);
  // }, [price]);

  // const dollarTotal = useMemo(() => {
  //   if (!price) return 0;
  //   return (quantity * (price?.gasPriceCent + price?.hedgiePriceCent)) / 100;
  // }, [price, quantity]);

  const gasFee = useMemo(() => {
    if (!price) return '0';
    return wei2Eth(getAmountOfWei(quantity, price.gasPriceWei.toString()));
  }, [price, quantity]);

  const discount = useMemo(() => {
    if (!price) return '0';
    return wei2Eth(
      getAmountOfWei(price.hedgie_quantity, price.gasPriceWei.toString()),
    );
  }, [price]);

  const amount = useMemo(() => {
    if (!price) return 0;
    const remain = quantity - price.hedgie_quantity;
    if (remain < 0) return 0;
    return remain * 0.08;
  }, [price, quantity]);

  return (
    <span className="text-lg lg:text-2xl text-gray-700">
      {ETH_PRICE}Ξ + <span className="text-gray-600">{gasFee} gas</span> =
      {isLoading ? 'Loading...' : amount + parseFloat(gasFee)}Ξ
      <p className="text-sm pt-2 text-gray-500">
        Discount: {discount}Ξ ({price?.hedgie_quantity} Hedgies free)
      </p>
    </span>
  );
};

export default MintCalculator;
