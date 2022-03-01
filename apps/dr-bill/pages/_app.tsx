import '../styles/globals.css';
import 'swiper/swiper-bundle.css';
import type {AppProps} from 'next/app';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {NextUIProvider} from '@nextui-org/react';
import Header from '../components/Header';
import {darkTheme, lightTheme} from '../customThemes';
import Footer from '../components/Footer';
import Background from '../components/Background';

function App({Component, pageProps}: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Background>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </Background>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
