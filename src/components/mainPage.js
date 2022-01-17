import React, { useState, useEffect, useContext} from 'react'

import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material'
import ResponsiveAppBar from './navbar';
import { Card, Box } from '@mui/material';
/* import { render } from '@testing-library/react'
 */
import {Synth} from 'tone'
import { DataAV } from './dataAV';
/* import { useTheme } from '@mui/styles'; */
import UserContext from './userContext';

export const MainPage = () => {
    const [user, setUser] = useState()
    const value = { user, setUser}
    return (
        <Container grid rowspacing={6}>
            <Typography variant="h1" gutterBottom={true}>crypTones</Typography>
            <UserContext.Provider value={ value }>
                <ResponsiveAppBar gutterBottom />
                <DataAV/>
            </UserContext.Provider>
        </Container>
        
    )
    }
