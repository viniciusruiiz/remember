import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import styles from './errorStyles';

class Error extends Component {


    render() {
        return ( 
        <>
        <h1>404 NOT FOUND</h1>
        <Typography>Página não encontrada</Typography>
        </>
        )
    }
}

export default Error;