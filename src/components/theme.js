import { createTheme } from '@mui/material'

const cryptonesTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: 'rgba(222,211,189,0.91)',
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