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
    var modalStyle = {focus: {outline: 'none'}}


    return (
      <>
        <Modal BackdropProps = {{style: {background: 'rgba(0,0,0,0.8)'}}} style={modalStyle} className={classes.modal} open={this.props.open} onClose={this.props.handleClose}>
          <Grid style={{outline: 'none'}} justify='center' container >
            <Grid style={{ textAlign: 'center', backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
              <img alt='descrição da imagem || momento' src={this.props.urlBucket} className={classes.imgLightBox} />
            </Grid>
            <Grid className={classes.content} alignItems='center' xs={3}>
              <MomentHeader person='Vinicius Ruiz' date='2 de março de 2019' description='Saudades desse dia! s2 s2 s2' />
              <div className={classes.commentsBox}>
                <Comment person='Vinicius Ruiz' content='Foi demais mano!'/>
                <Comment person='Lucas Yudi' content='Foi demais mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano'/>
                <Comment person='Lucas Yudi' content='Foi demais mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano'/>
              </div>
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  }
}

export default withStyles(styles)(MomentModal)