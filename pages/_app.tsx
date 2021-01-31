import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';

import 'normalize.css';

function _App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default _App;
