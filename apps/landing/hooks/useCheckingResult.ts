import { checkFreeHedgie } from '../api';
import { useCallback, useState } from 'react';
import { Hedgie } from 'shared';

export default function useCheckingResult() {
  const [error, setError] = useState({
    code: 0,
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Hedgie>({
    canTakeGen3: 0,
    id: '',
  });

  const fetchCb = useCallback((color: string) => {
    (async () => {
      setIsLoading(true);
      setError({
        code: 0,
        message: '',
      });
      try {
        const { data } = await checkFreeHedgie(color);
        setData(data.hedgie);
      } catch (e: any) {
        setError({
          message: e?.message || 'error',
          code: e?.code || 500,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchData: fetchCb,
  };
}
