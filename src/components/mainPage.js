import React from 'react'
import { Typography, Button, Container } from '@mui/material'
import ResponsiveAppBar from './navbar';
import { Card, Box } from '@mui/material';
/* import { render } from '@testing-library/react'
 */
import {Synth} from 'tone'
import { testNoise } from './tone'
import { Controls } from './controls'
import PlayData from './tonepromise'
import ApexChart from './chartComponent.js';


export const MainPage = () => {
    console.log(Synth)
//Icons: settingsINput, showchart, play pause etc. autograph, addchart. SAVE. reload: replay,  about: info, sign in: login

    return (
        <Container grid rowspacing={6}>
            <Typography variant="h1" color="primary" align="center" >crypTones</Typography>
            <ResponsiveAppBar gutterBottom/>
            <Box
                sx={{
                    m: 4
                }}>
            <Card id='introCard'>
            <ApexChart/>
            hello this is where chart object and intro and stuff will go 
            </Card>
            </Box>
            <Button color="secondary">Hello</Button>;
            <Button variant="outlined" color="secondary" onClick={testNoise}> Try Me</Button>
            <Controls/>
            <Typography>below</Typography>
            <PlayData/>
        </Container>
        
    )
    }

