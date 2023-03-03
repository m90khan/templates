import { CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';
const styles = css`
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
    margin-right: 0 !important;
  }
  body {
    width: 100vw;
    height: 100vh;
  }

  #next {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  @font-face {
    font-family: 'Roboto-Black';
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Black.ttf') format('trueType');
  }
  @font-face {
    font-family: 'Roboto-Bold';
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Bold.ttf') format('trueType');
  }
  @font-face {
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    font-display: swap;
    src: url('../../fonts/Roboto-Medium.ttf') format('trueType');
  }
`;
export default function GlobalStyles({ children }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            font-size: 62.5%;
            margin-right: 0 !important;
          }
          *,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Roboto', sans-serif !important;
          }
          body {
            background: none;
            width: 100vw;
            height: 100vh;
          }
          .container {
            width: 100vw;
            height: 100vh;
          }

          #next {
            height: 100%;
            width: 100%;
          }
        `}
      />
      {children}
    </>
  );
}
