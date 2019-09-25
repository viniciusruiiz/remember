import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

class UserHome extends Component {
    render() {
        return (
        <>
         <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    asd
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Photos
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
        </>
        )
    }
}

export default UserHome