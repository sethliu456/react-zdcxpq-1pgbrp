import { createTheme } from '@mui/material/styles';

/**
 * Customize the Material UI theme
 */
const muiTheme = createTheme({
  typography: {
    fontFamily: 'Avenir',
  },
  palette: {
    primary: {
      main: '#00a4e3',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '.9rem',
          fontWeight: 'normal',
          padding: '.8rem .8rem',
          color: 'white',
          backgroundColor: '#333',
        },
      },
    },
  },
});

export default muiTheme;
