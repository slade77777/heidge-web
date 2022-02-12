import {createTheme} from '@nextui-org/react';

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: 'Josefin Sans',
      heading: 'Abril Fatface',
    },
    colors: {
      background: '#DFDCD5',
      backgroundImage: 'url("/assets/noise-dark.png")',
      text: 'black',
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: 'Josefin Sans',
      heading: 'Abril Fatface',
    },
    colors: {
      background: '#000000',
      text: 'white',
      primary: '#EDEAE2',
      primaryDark: '#EDEAE2',
    },
  },
});
