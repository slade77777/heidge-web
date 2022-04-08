import { useMetamask } from 'shared';
import { useEffect, useState } from 'react';
import { drBillAbi } from '../constants/drbillAbi';

export default function useUnitPrice() {
  const { account, getContract } = useMetamask();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('0');

  useEffect(() => {
    if (!!account) {
      setLoading(true);

      const contract = getContract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        drBillAbi,
      );

      contract
        .getUnitPrice()
        .then((res: any) => {
          setPrice(res._hex);
        })
        .catch((e: any) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPrice('0');
    }
  }, [account]);
  return {
    loading,
    unitPrice: price,
  };
}
