import { ReactNode } from 'react';
import { MetamaskProvider } from './MetamaskContext';
import { QueryProvider } from './ReactQueryContext';

export type AppTypes = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppTypes) => {
  return (
    <MetamaskProvider>
      <QueryProvider>{children}</QueryProvider>
    </MetamaskProvider>
  );
};
