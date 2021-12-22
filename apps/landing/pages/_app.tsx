import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetamaskProvider } from "shared/wallet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetamaskProvider>
      <Component {...pageProps} />
    </MetamaskProvider>
  );
}

export default MyApp;
