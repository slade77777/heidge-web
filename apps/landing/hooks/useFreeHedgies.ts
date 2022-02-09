import { useQuery } from 'react-query';
import { getPrice } from '../api';

export default function useFreeHedgies(wallet: string) {
  const queryKey = 'get-number-of-free-hedgies';
  const { data, isLoading, error } = useQuery(
    queryKey,
    () => getPrice(`/gen3/getPrice?wallet=${wallet}&hedgie_quantity=1`),
    {
      enabled: !!wallet,
      refetchOnWindowFocus: false,
    },
  );

  return {
    freeQuantity: data?.data?.free_quantity || 0,
    loadingFreeQuantity: isLoading,
    error,
  };
}
