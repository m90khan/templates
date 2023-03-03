import { Button, ChakraProvider, CSSReset, Heading } from '@chakra-ui/react';
import GlobalStyles from '@styles/GlobalStyles';
import customTheme from '@styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <Component {...pageProps} />

      {/* <Script
        id="usersnap"
        src="/debug/usersnap.js"
        strategy="beforeInteractive"
      ></Script> */}
    </ChakraProvider>
  );
}

export default MyApp;
