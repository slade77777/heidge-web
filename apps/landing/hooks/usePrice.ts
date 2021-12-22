import { useQuery } from 'react-query';
import { getPrice } from '../api';

export default function usePrice() {
  const { data, isLoading, error } = useQuery('/hedgie-price', getPrice);

  return {
    price: data?.data,
    isLoading,
    error,
  };
}
