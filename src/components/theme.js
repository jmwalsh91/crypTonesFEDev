import { createTheme } from '@mui/material'

/* const cryptonesTheme = createTheme({
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
 */

////////////FIGURE OUT ONBLUR OR CONTRAST

const cryptonesTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9e988b',
      contrastText: 'rgba(247,236,226,0.87)',
    },
    secondary: {
      main: '#53e6e6',
      contrastText: 'rgba(247,236,226,0.87)',
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
    h1: {
      fontFamily: 'Audiowide',
      color: '#9e988b'
    },
    body1: {
      color: '#9e988b',
    },
    body2: {
      color:  '#53e6e6',
    }

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
      color: {
        contrast: 'rgb(110, 106, 97)'
      }
    },
    MuiFormHelperText: {
      margin: 'dense',
      color: '#040000'
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
      color: '#53e6e6',
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
      bgColor: '#9e988b'
    },
    
    MuiFormLabel: {
      color: '#9e988b'
    },
    MuiAppBar: {
      bgColor: 'transparent',
    }
  }
}); 


export default cryptonesTheme

/* 

<label class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary Mui-required css-xhznko-MuiFormLabel-root-MuiInputLabel-root" data-shrink="false" for="name" id="name-label">Email Address<span aria-hidden="true" class="MuiInputLabel-asterisk MuiFormLabel-asterisk css-18jith6-MuiFormLabel-asterisk"> *</span></label>

<label class="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary Mui-focused Mui-required css-1ybj8yq-MuiFormLabel-root-MuiInputLabel-root" data-shrink="true" for="name" id="name-label">Email Address<span aria-hidden="true" class="MuiInputLabel-asterisk MuiFormLabel-asterisk css-18jith6-MuiFormLabel-asterisk"> *</span></label>

 */