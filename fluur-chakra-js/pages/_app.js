import { Button, ChakraProvider, CSSReset, Heading } from '@chakra-ui/react';
import { SupressLogs } from '@lib/hooks/SupressLogs';
import { UserSnap } from '@lib/hooks/UserSnap';
import GlobalStyles from '@styles/GlobalStyles';
import customTheme from '@styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyles />
      <SupressLogs />
      <UserSnap />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
