import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../images/logo-icon.png';
import perfil from './../images/perfil.jpg';

class NavBar extends Component {
    render() {
        const { classes } = this.props

        return (
        <>
         <div>
            <AppBar position="static" className={classes.bar} position="static">
                <Toolbar variant="dense">
                    <img src={logo} className={classes.logoIcon}/>
                    <Typography className={classes.logoText}>remember</Typography>
                    <Typography className={classes.user}>Lucas</Typography>
                    <img src={perfil} className={classes.perfil}/>
                </Toolbar>
            </AppBar>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(NavBar)