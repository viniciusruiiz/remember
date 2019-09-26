import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon, Paper, Grid } from '@material-ui/core';
import NavBar from './../../components/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';


class UserHome extends Component {
    render() {
        const { classes } = this.props
        return (
        <>
         <NavBar />
        <div className={classes.root}>
            <Typography className={classes.hideCompartilhadas}>Memorylines compartilhadas<Icon className={classes.iconArrow}>keyboard_arrow_down</Icon> </Typography>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
            </Grid>
            <Typography className={classes.hideCompartilhadas}>Memorylines privadas<Icon className={classes.iconArrow}>keyboard_arrow_down</Icon> </Typography>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
            </Grid>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(UserHome)