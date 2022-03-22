import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AppProvider, AuthProvider, getFirebaseClient } from "shared";
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
