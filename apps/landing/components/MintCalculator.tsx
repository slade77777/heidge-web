import { cent2Dollar } from 'shared';
import { ETH_PRICE } from '../constants';
import LoadingDots from './LoadingDots';
import { Price } from '../types';

const MintCalculator = ({
  price,
  isLoading,
}: {
  price: Price;
  isLoading?: boolean;
}) => {
  return (
    <span className="text-lg lg:text-2xl text-gray-700">
      {ETH_PRICE}Ξ + <span className="text-gray-600">gas</span> ={' '}
      {isLoading ? (
        <LoadingDots className="bg-teal-400" />
      ) : (
        `$${cent2Dollar(price?.totalPriceCent)}`
      )}
      {price?.free_quantity && (
        <p className="text-sm pt-2 text-gray-500">
          Discount: <span className="font-bold">{price?.free_quantity}</span>{' '}
          Hedgies
        </p>
      )}
    </span>
  );
};

export default MintCalculator;
