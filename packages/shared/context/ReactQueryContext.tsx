import { ReactNode } from 'react';
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
  useMutation,
} from 'react-query';

const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { useMutation, useQuery, QueryProvider };
