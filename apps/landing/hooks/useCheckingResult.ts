import { checkFreeHedgie } from '../api';
import { useCallback, useState } from 'react';
import { Hedgie } from 'shared';
import { Loading } from '../types';

export default function useCheckingResult() {
  const [error, setError] = useState({
    code: 0,
    message: '',
  });
  const [isLoading, setIsLoading] = useState<Loading>('none');
  const [data, setData] = useState<Hedgie>(null);

  const fetchCb = useCallback((color: string) => {
    (async () => {
      setIsLoading('loading');
      setError({
        code: 0,
        message: '',
      });
      try {
        const { data } = await checkFreeHedgie(color);
        setData(data.hedgie);
        setIsLoading('done');
      } catch (e: any) {
        setIsLoading('error');
        setError({
          message: e?.message || 'error',
          code: e?.code || 500,
        });
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
