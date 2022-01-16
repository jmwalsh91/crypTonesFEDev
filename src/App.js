
import './App.css';
import { useRef, useState, useEffect } from "react";
import { createContext } from "react";
import { Container} from '@mui/material'
import { ThemeProvider } from '@mui/material';
import cryptonesTheme from './components/theme'
/* import {Nav} from "./components/nav"
 *//* import {Landing} from './components/compLanding'
 */
import Tone from 'tone'
import {MainPage} from './components/mainPage' 


function App() {
/*   const [userStatus, setUserStatus] = useContext(UserContext) */
 
  return (
    <ThemeProvider theme={ cryptonesTheme }>
      
    <div className="App">
      <Container >
    
        <MainPage/>

        
      </Container>
    </div>
    
    </ThemeProvider>
    
  );
}

export default App;
