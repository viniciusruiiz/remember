import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './momentHeaderStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';
import { Typography, Grid } from '@material-ui/core';

class MomentHeader extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <div className={classes.root}>
          <Grid container>          
            <Grid>
              <img alt='' src={this.props.ownerPicture} className={classes.donoImg} />
            </Grid>
            <Grid>
              <Typography display='inline' className={classes.donoName}>{this.props.person}</Typography>
              <Typography className={classes.momentDate}>{this.props.date}</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.description}>{this.props.description}</Typography>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentHeader)