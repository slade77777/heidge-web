import {createTheme} from '@nextui-org/react';

const generalTheme = {
  fonts: {
    sans: 'Josefin Sans',
    heading: 'Abril Fatface',
  },
  fontSizes: {
    tiny: '11px',
    xs: '18px',
    base: '22px',
    sm: '34px',
    md: '42px',
    lg: '54px',
    xl: '74px',
  },
  lineHeights: {
    xs: '11px',
    sm: '22px',
    md: '34px',
    lg: '46px',
    xl: '74px',
  },
}

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    ...generalTheme,
    colors: {
      background: '#DFDCD5',
      text: '$primary',
      link: '$primary',
      primary: '$black',
      primaryDark: '#EDEAE2',
      primaryLight: '$black',
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    ...generalTheme,
    colors: {
      background: '#000000',
      text: '$primary',
      link: '$primary',
      primary: '#EDEAE2',
      primaryDark: '#EDEAE2',
      primaryLight: '$black',
    },
  },
});
