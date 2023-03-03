import { createGlobalStyle } from 'styled-components';
import { fonts, fontStyles } from '../base/fonts';
import { reset } from '../base/reset';
const GlobalStyles = createGlobalStyle`
${reset}
${fontStyles}
html,
body {
  padding: 0;
  margin: 0;
  font-family: ${fonts.primary}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
 
`;

export default GlobalStyles;
