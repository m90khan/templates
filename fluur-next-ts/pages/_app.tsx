import { SupressLogs } from '@lib/hooks/SupressLogs';
import { UserSnap } from '@lib/hooks/UserSnap';
import GlobalStyles from '@styles/globalStyles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <UserSnap />
            <SupressLogs />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
