import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "shared";
import Layout from "../components/Layout";
import { Toaster } from "shared";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </AppProvider>
  );
}

export default MyApp;
