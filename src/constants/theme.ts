import { createMuiTheme, Theme } from '@material-ui/core';

export const primaryColor = {
  borderGray: '#e3e3e3',
  danger: '#d70243',
  lightBlue: '#244294',
  lightGray: '#ededed',
};

export const primaryFonts = {
  sourceSansPro: 'Source Sans Pro',
  rubik: 'Rubik',
};

export const theme: Theme = createMuiTheme({
  palette: {},
  typography: {
    button: {
      textTransform: 'uppercase',
    },
  },
});
