import React, { Component } from 'react';
import styles from './momentModalStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid, TextField, InputAdornment, Grow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import Comment from './../comment/comment'
import MomentHeader from '../momentHeader/momentHeader';
import RSC from "react-scrollbars-custom";
import { PersonAdd } from '@material-ui/icons';

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
            <Grid className={classes.content} xs={3}>
              <RSC className={classes.RSC}>
                <MomentHeader person='Vinicius Ruiz' date='2 de março de 2019' description='Saudades desse dia! s2 s2 s2' />
                <Comment person='Vinicius Ruiz' date='2 de março de 2019' content='Foi demais mano!'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Foi demais mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Foi demais manovelho, curti muito!'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Ameeeei esse dia com voces! amo voces velho serio! nossa que legal'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Diversao!'/>
              </RSC>
              <TextField  className={classes.input}
                            margin="dense"
                            hiddenLabel
                            variant="filled"
                            placeholder="Comentário..." />
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  }
}

export default withStyles(styles)(MomentModal)