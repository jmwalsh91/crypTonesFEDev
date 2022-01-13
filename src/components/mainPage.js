import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material'
import ResponsiveAppBar from './navbar';
import { Card, Box } from '@mui/material';
/* import { render } from '@testing-library/react'
 */
import {Synth} from 'tone'
import { DataAV } from './dataAV';
/* import { useTheme } from '@mui/styles'; */


export const MainPage = () => {
   /*  const theme = useTheme() */
//Icons: settingsINput, showchart, play pause etc. autograph, addchart. SAVE. reload: replay,  about: info, sign in: login

    return (
        <Container grid rowspacing={6}>
            <Typography variant="h1" gutterBottom={true}>crypTones</Typography>
            <ResponsiveAppBar gutterBottom/>
            <DataAV/>
        </Container>
        
    )
    }

