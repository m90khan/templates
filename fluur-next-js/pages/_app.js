import GlobalStyles from '@/styles/globalStyles';
import { SupressLogs } from '@lib/hooks/SupressLogs';
import { UserSnap } from '@lib/hooks/UserSnap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <SupressLogs />
      <UserSnap />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
