import { createTheme } from '@mui/material'

const cryptonesTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: 'rgba(222,211,189,0.91)'
        },
        secondary: {
          main: '#08c9c9',
        },
        background: {
          default: '#0a0909',
          paper: '#e6d3bb',
        },
        text: {
          primary: '#4a4238',
          secondary: 'rgba(134,253,222,0.54)',
          disabled: '#ef14b1',
          hint: 'rgba(0,255,140,0.38)',
        },
      },
      typography: {
        fontWeightLight: 600,
        fontFamily: 'Bodoni Moda',
        fontSize: 15,
      },
      spacing: 8,
      shape: {
        borderRadius: 4,
      },
    }
  );

export default cryptonesTheme

/* 
const cryptonesTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9e988b',
    },
    secondary: {
      main: '#53e6e6',
    },
    background: {
      default: '#040000',
      paper: '#000000',
    },
    success: {
      main: '#a4f5a8',
    },
    error: {
      main: '#ff1313',
    },
    warning: {
      main: '#e40e12',
    },
    divider: 'rgba(253,147,0,0.53)',
  },
  typography: {
    fontFamily: 'Audiowide',
    fontWeightLight: 300,
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiAppBar: {
      color: 'transparent',
    }
  }
}); */


