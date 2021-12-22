import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MetamaskProvider } from 'shared';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetamaskProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MetamaskProvider>
  );
}

export default MyApp;
