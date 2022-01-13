
import './App.css';
import { Container} from '@mui/material'
import { ThemeProvider } from '@mui/material';
import cryptonesTheme from './components/theme'
/* import {Nav} from "./components/nav"
 *//* import {Landing} from './components/compLanding'
 */
import Tone from 'tone'
import {MainPage} from './components/mainPage' 


function App() {

 
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
