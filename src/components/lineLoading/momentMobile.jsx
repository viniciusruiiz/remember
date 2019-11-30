import React, { Component } from 'react';
import styles from './momentMobileStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import MomentModal from '../momentModal/momentModal';
import img404 from '../../images/not_found.png'

class MomentMobile extends Component {
  render() {
    const { classes } = this.props

    return (
      <>
        <div className={classes.root}>
          <div className={classes.img} />
          <Grid container alignContent='center' alignItems='center'>
            <Grid item xs={2}>
            </Grid>
            <Grid xs={1}>
              <div style={{ borderLeft: "3px solid rgba(0,0,0,.2)", height: "100px" }} />
            </Grid>
            <Grid item xs={9}>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(MomentMobile)