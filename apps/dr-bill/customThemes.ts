import {createTheme} from '@nextui-org/react';

const generalTheme = {
  fonts: {
    sans: 'Josefin Sans',
  },
}

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    ...generalTheme,
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
    ...generalTheme,
    colors: {
      background: '#000000',
      text: 'white',
      primary: '#EDEAE2',
      primaryDark: '#EDEAE2',
    },
  },
});
