import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppProvider, AuthProvider } from "shared";
import Layout from "../components/Layout";
import { getFirebaseClient } from "shared/lib/firebaseClient";
import { firebaseConfig } from "../constants/firebase";

const firebaseAuth = getFirebaseClient(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AuthProvider auth={firebaseAuth}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </AppProvider>
  );
}

export default MyApp;
