import { ReactNode } from 'react';
import { MetamaskProvider } from './MetamaskContext';
import { QueryProvider } from './ReactQueryContext';
import { AuthProvider } from './AuthenticationContext';

export type AppTypes = {
  children: ReactNode;
  requiredAuth?: boolean;
};

export const AppProvider = ({ children, requiredAuth }: AppTypes) => {
  return (
    <MetamaskProvider>
      <QueryProvider>
        {requiredAuth ? <AuthProvider>{children}</AuthProvider> : children}
      </QueryProvider>
    </MetamaskProvider>
  );
};
