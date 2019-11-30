import React, { Component } from 'react';
import styles from './momentStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import MomentModal from '../momentModal/momentModal';
import img404 from '../../images/not_found.png'

class Moment extends Component {

  render() {
    const { classes } = this.props

    return (
      <>
        <div className={classes.circle}>
          <div className={classes.img} />
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Moment)