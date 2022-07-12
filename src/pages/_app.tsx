import 'src/lib/tailwind.css';

import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

// eslint-disable-next-line func-style
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
