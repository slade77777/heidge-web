import { useQuery } from 'react-query';
import { getPrice } from '../api';

export default function usePrice(wallet: string, quantity: number) {
  const queryKey = `/gen3/getPrice?wallet=${wallet}&hedgie_quantity=${quantity}`;
  const { data, isLoading, error } = useQuery(
    queryKey,
    () => getPrice(queryKey),
    {
      enabled: !!wallet && !!quantity,
    },
  );

  return {
    price: data?.data,
    isLoading,
    error,
  };
}
