import { css } from 'styled-components';
export const fonts = {
  primary: 'Menlo',
  secondary: 'Arial',
};

// prettier-ignore
export const fontStyles = css`
@font-face {
  font-family: ${fonts.primary};
  src: url('../fonts/george-x-regular.woff2') format('woff2'),
      url('../fonts/george-x-regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: ${fonts.primary};
  src: url('../fonts/suisse-bp-regular.woff2') format('woff2'),
      url('../fonts/suisse-bp-regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: ${fonts.secondary};
  src: url('../fonts/suisse-bp-light.woff2') format('woff2'),
      url('../fonts/suisse-bp-light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: ${fonts.secondary};
  src: url('../fonts/suisse-bp-ultra-light.woff2') format('woff2'),
      url('../fonts/suisse-bp-ultra-light.woff') format('woff');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

`
