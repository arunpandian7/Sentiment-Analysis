import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
     
      main: '#f3ca20',
    },
    text:{
      primary : '#3b3b00'

    }
  },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },

  
  });

theme.typography.h2 = {
  fontSize:'2.0rem',
  [theme.breakpoints.up('md')]:{
    fontSize:'3.4rem',
    letterSpacing:'0.9rem'
  },
  letterSpacing:"0.1rem"
}

theme.typography.h4 ={
  fontSize:'1.4rem',
  [theme.breakpoints.up('md')]:{
    fontSize:'2.4rem',
    letterSpacing: '0.1rem'
  },
  letterSpacing:'0.09rem'
}

theme.typography.body1 ={
  fontSize:'0.8rem',
  [theme.breakpoints.up('md')]:{
    fontSize:'1.2rem',
    letterSpacing:'0.04rem',
    lineHeight:'2.2rem'
  },
  lineHeight:'1.8rem'
}

theme.typography.caption ={
  lineSpacing: '2rem',
  [theme.breakpoints.up('md')]:{
    letterSpacing:'0.2rem'
  },
}
export default theme;