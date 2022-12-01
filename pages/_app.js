
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import '../styles/landingPage.css'
import '../styles/globals.css'
import '../styles/editor.css'
import ResponsiveAppBar from "./navbar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import FSElliotPro from '../fonts/fs-elliot-pro-cufonfonts/FSElliotProRegular.otf';
// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import GlobalProvider from '../contexts/global'


function MyApp({ Component, pageProps }) {
  
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'FS Elliot Pro',
      },
      button: {
        textTransform: 'none'
      }
    },
  });

  return (
    
    <ThemeProvider theme={theme}>
    <ResponsiveAppBar />
    <Component {...pageProps} />
   </ThemeProvider>
   
  
  );
}

export default MyApp
