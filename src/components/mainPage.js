import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import ResponsiveAppBar from './navbar';
import { Card, Box } from '@mui/material';
/* import { render } from '@testing-library/react'
 */
import {Synth} from 'tone'
import { DataAV } from './dataAV';



export const MainPage = () => {
    console.log(Synth)
//Icons: settingsINput, showchart, play pause etc. autograph, addchart. SAVE. reload: replay,  about: info, sign in: login

    return (
        <Container grid rowspacing={6}>
            <Typography variant="h1" color="primary" align="center" >crypTones</Typography>
            <ResponsiveAppBar gutterBottom/>
            <DataAV/>
        </Container>
        
    )
    }

