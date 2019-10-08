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

    //setInterval(() => document.body.style.overflowY = "visible", 200)
    // document.body.style.overflowY = "visible"
    return (
      <>
        <Modal className={classes.modal} classes={{ focused: classes.modalFocused }} open={this.props.open} onClose={this.props.handleClose}>
          <Grid justify='center' container >
            <Grid style={{ textAlign: 'center', backgroundColor: "rgba(240, 240, 240, 0.2)" }}>
              <img alt='descrição da imagem || momento' src={this.props.urlBucket} className={classes.imgLightBox} />
            </Grid>
            <Grid alignItems='center' xs={3}>
              <div style={{ width: "100%", marginBottom: '15px', borderRadius: "0 40px 40px 0", display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <img alt='' src={perfil} className={classes.donoImg} />
                <div className={classes.donoDetail}>
                  <p className={classes.donoName}>Vinicius Ruiz</p>
                  <p className={classes.momentDate}>2 de março de 2019</p>
                </div>
                <p className={classes.description}>Saudades desse dia! s2 s2 s2</p>
                <p style={{ margin: "20px 0 20px 10px", color: "whitesmoke" }}>TODO: implement reações</p>
              </div>

              <div style={{ paddingRight: "20px", paddingBottom: "5px", borderRadius: "0 40px 40px 0", marginBottom: '15px', display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <img alt='' src={perfil} className={classes.commentOwnerPhoto} />
                <div className={classes.comment}>
                  <p className={classes.commentOwner}>Vinicius Ruiz</p>
                </div>
                <p className={classes.commentContent}>Foi demais!</p>
              </div>

              <div style={{ paddingRight: "20px", paddingBottom: "5px", borderRadius: "0 40px 40px 0", marginBottom: '15px', display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <div>
                  <img alt='' src={perfil} className={classes.commentOwnerPhoto} />
                  <div className={classes.comment}>
                    <p className={classes.commentOwner}>Vinicius Ruiz</p>
                  </div>
                </div>
                <p className={classes.commentContent}>Foi demais! demaisdemais demais demais demais demais demais demais demais demais demais demaisdemais demais demais </p>
              </div>

              {/* <div style={{ paddingRight: "20px", paddingBottom: "15px", borderRadius: "0 40px 40px 0", marginBottom: '15px', display: "inline-block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                <img alt='' src={perfil} className={classes.donoImg} />
                <div className={classes.donoDetail}>
                  <p className={classes.donoName}>Vinicius Ruiz Ruiz Ruiz Ruiz Ruiz Ruiz</p>
                  <p className={classes.commentContent}>Foi demais!</p>
                </div>
              </div> */}
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  }
}

export default withStyles(styles)(MomentModal)