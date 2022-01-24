import { useQuery } from 'react-query';
import { getNumberOfDiscountHedgies } from '../api';

export default function useDiscountHedgies(wallet: string) {
  const { data, isLoading, error } = useQuery(
    '/useDiscountHedgies',
    () => getNumberOfDiscountHedgies(wallet),
    {
      enabled: !!wallet,
    },
  );

  return {
    price: data?.data,
    isLoading,
    error,
  };
}
