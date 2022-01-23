import React, { useState, useEffect, useContext, useMemo} from 'react'

import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material'
import ResponsiveAppBar from './navbar';
import { Card, Box } from '@mui/material';
/* import { render } from '@testing-library/react'
 */
import {Synth} from 'tone'
import { DataAV } from './dataAV';
/* import { useTheme } from '@mui/styles'; */
import { UserContext, UserContextProvider } from './userContext';

export const MainPage = () => {
   const { user, setUser } = useContext(UserContext)
    
    useEffect(() => {
        console.log(user)
    })
    return (
        <Container grid rowspacing={6}>
            <Typography variant="h2" gutterBottom={true}>crypTones</Typography>
            <UserContextProvider>
                <ResponsiveAppBar gutterBottom />
                <DataAV/>
            </UserContextProvider>
        </Container>
        
    )
    }
