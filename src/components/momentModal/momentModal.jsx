import React, { Component } from 'react';
import styles from './momentModalStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'

class MomentModal extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <Modal className={classes.modal} open={this.props.open} onClose={this.props.handleClose}>
          <Grid container>
            <Grid md={8}>
              <img alt='' src={this.props.urlBucket} className={classes.imgLightBox}/>
            </Grid>
            <Grid alignItems='center' justify='center' container md={4}>
              <div>
                <img className={classes.donoImg} src={perfil} alt=''/>
              </div>
              aloo comentarios
            </Grid>
          </Grid>
        </Modal>
        </>
        )
    }
}

export default withStyles(styles)(MomentModal)