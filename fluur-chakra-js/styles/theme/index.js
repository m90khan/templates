import { extendTheme } from '@chakra-ui/react';
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1450px',
  '3xl': '1920px',
  '4xl': '2160px'
};

const customTheme = extendTheme({
  colors: {
    primary: {
      white: '#FFFFFF',
      black: '#000000',
      orange: '#F07D00',
      orange500: '#CA6316',
      grey: '#363636'
    },
    gray: {
      50: '#F2F2F2',
      75: '#ECECEC',
      100: '#D8D8D8',
      200: '#575757'
    },
    system: {
      error: '#FD1314',
      success: '#219C49',
      warning: '#F9B300',
      info: '#0062CA'
    },
    gradient: {
      orange: 'linear-gradient(96.8deg, #F07D00 2.51%, #CA6316 78.96%)'
    }
  },

  fonts: {
    black: 'Roboto-Black',
    bold: 'Roboto-Bold',
    medium: 'Roboto-Medium'
  },

  breakpoints: breakpoints,
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: '60px',
          fontWeight: 900
        },
        h2: { fontSize: '40px', fontWeight: 900 },
        h3: { fontSize: '28px', fontWeight: 900 },
        h4: {
          fontsize: '18px',
          fontWeight: 900,
          _hover: { color: 'primary.orange' }
        }
      }
    },
    Text: {
      sizes: {
        xl: {
          fontSize: '20px'
        },
        lg: { fontSize: '18px' },
        md: { fontSize: '16px' },
        sm: { fontSize: '14px' }
      }
    },
    Button: {
      variants: {
        primary: {
          background: 'gradient.orange',
          _hover: {
            background: 'gradient.orangeHover'
          }
        },
        secondary: {
          background: 'gradient.darkGrey',
          color: 'primary.white',
          _hover: {
            background: 'gradient.secondaryButtonHover'
          }
        },
        disabled: {
          background: 'gradient.lightGrey',
          color: 'gray.200'
        }
      }
    }
  }
});

export default customTheme;
