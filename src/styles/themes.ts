import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#005AA9',
    },
    error: {
      main: '#FF3B30',
    },
    text: {
      primary: '#000000',
      secondary: '#535353',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const colors = {
  mainBackground: '#292F66',
  activeSideBackground: '#D9EBFF',
  activeIconColor: '#32337B',
};
