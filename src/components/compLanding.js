import React from 'react';
import ReactLoading from 'react-loading'
import { Typography, Container } from '@material-ui/core';

export const Landing = ({type, color}) => {
        <Container>
        <ReactLoading type={type} color={color} height={333} width={333}/>
        <Typography variant="h3"> Hullo </Typography>
        </Container>
    }
