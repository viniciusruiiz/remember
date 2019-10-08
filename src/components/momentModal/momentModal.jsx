import React, { Component } from 'react';
import styles from './momentModalStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import Comment from './../comment/comment'
import MomentHeader from '../momentHeader/momentHeader';

class MomentModal extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <Modal className={classes.modal} classes={{ focused: classes.modalFocused }} open={this.props.open} onClose={this.props.handleClose}>
          <Grid justify='center' container >
            <Grid style={{ textAlign: 'center', backgroundColor: "rgba(240, 240, 240, 0.2)" }}>
              <img alt='descrição da imagem || momento' src={this.props.urlBucket} className={classes.imgLightBox} />
            </Grid>
            <Grid alignItems='center' xs={3}>
              <MomentHeader person='Vinicius Ruiz' date='2 de março de 2019' description='Saudades desse dia! s2 s2 s2' />
              <Comment person='Vinicius Ruiz' content='Foi demais mano!'/>
              <Comment person='Lucas Yudi' content='Foi demais mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano'/>
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  }
}

export default withStyles(styles)(MomentModal)