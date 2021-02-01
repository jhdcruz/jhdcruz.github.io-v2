import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';
import { GlobalTheme } from '../components/modules/Globals.module';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import 'normalize.css';

function _App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default _App;
