import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon, Paper, Grid } from '@material-ui/core';
import NavBar from '../../components/navbar/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';
import LineBox from '../../components/lineBox/lineBox';


class UserHome extends Component {
    render() {
        const { classes } = this.props
        return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Typography className={classes.hideCompartilhadas}>Memorylines compartilhadas<Icon className={classes.iconArrow}>keyboard_arrow_down</Icon> </Typography>
                <Grid container spacing={4}>
                    <LineBox />
                    <LineBox />
                    <LineBox />
                    <LineBox />
                </Grid>
                <Typography className={classes.hideCompartilhadas}>Memorylines privadas<Icon className={classes.iconArrow}>keyboard_arrow_down</Icon> </Typography>
                <Grid container spacing={4}>
                    <LineBox />
                    <LineBox />
                    <LineBox />
                </Grid>
            </div>
        </>
        )
    }
}

export default withStyles(styles)(UserHome)