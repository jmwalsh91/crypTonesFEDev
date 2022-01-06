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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aperiam ipsum eius maxime molestias excepturi, voluptatem quidem animi aspernatur. Quidem culpa impedit laboriosam magni. Id ut voluptate maiores eos! Quos.

                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero modi quos voluptatum placeat quasi alias necessitatibus ducimus recusandae. Aspernatur labore, omnis ex necessitatibus quod incidunt placeat magni qui cum asperiores!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem! Animi, blanditiis doloribus rem magnam deleniti sint facere tempore obcaecati corrupti facilis mollitia, eius itaque et, labore architecto perferendis vitae.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis suscipit optio reprehenderit nulla debitis. Perferendis, quidem et nostrum quis dolores quisquam quas voluptatum neque adipisci, molestiae eos nam assumenda.

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

