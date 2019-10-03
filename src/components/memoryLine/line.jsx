import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Grid, Paper, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Hidden, Button } from '@material-ui/core';
import { Favorite, MoreVert, Share ,ExpandMore } from '@material-ui/icons';
import styles from './lineStyles'
import perfil from './../../images/perfil.jpg';
import Moment from '../moment/moment';

class Line extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <Grid container alignItems="center" className={classes.root}>
        {this.props.data.map((data) => (
                <Moment />
            ))}
        </Grid>
        )
    }
}

export default withStyles(styles)(Line)