import React, { Component } from 'react';
import styles from './momentMobileStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import MomentModal from '../momentModal/momentModal';
import img404 from '../../images/not_found.png'
import { Favorite, ChatBubbleOutline, FavoriteBorder } from '@material-ui/icons';
import CommentModal from '../commentsModalMobile/commentModal';

class MomentMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  // handleImageLoaded = () => {
  //   this.setState({ loading: false });
  // }

  // renderSpinner() {
  //   const { classes } = this.props

  //   if (!this.state.loading) {
  //     return null;
  //   }
  //   return (
  //     <>
  //       <span className={classes.filter} />
  //       <CircularProgress className={classes.load} />
  //     </>
  //   );
  // }

  formatMonth(date) {
    switch (date.getMonth()) {
      case 0:
        return 'Jan'
        break;
      case 1:
        return 'Fev'
        break;
      case 2:
        return 'Mar'
        break;
      case 3:
        return 'Abr'
        break;
      case 4:
        return 'Mai'
        break;
      case 5:
        return 'Jun'
        break;
      case 6:
        return 'Jul'
        break;
      case 7:
        return 'Ago'
        break;
      case 8:
        return 'Set'
        break;
      case 9:
        return 'Out'
        break;
      case 10:
        return 'Nov'
        break;
      case 11:
        return 'Dez'
        break;
    }
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <div className={classes.root}>
          {/* {this.renderSpinner()} */}
          <img alt='' onClick={this.handleOpen} src={this.props.urlBucket} onError={(e) => e.target.src = img404} className={classes.img} id={"moment-" + this.props.reference} />
          <Grid container alignContent='center'>
            <Grid className={classes.date} item xs={2}>
              <Typography className={classes.dateMonth}>{this.formatMonth(new Date(this.props.creationDate))}</Typography>
              <Typography className={classes.dateDay}>{new Date(this.props.creationDate).getDate()}</Typography>
              <Typography className={classes.dateYear}>{new Date(this.props.creationDate).getFullYear()}</Typography>
            </Grid>
            <Grid xs={1}>
              <div style={{ borderLeft: "3px solid black", height: "135px" }} />
            </Grid>
            <Grid item xs={9} className={classes.date}>
              <Grid container>
                <Grid item xs={3}>
                  <img src={this.props.moment.ownerPicture} className={classes.ownerPic}></img>
                </Grid>
                <Grid item xs={9}>
                  <Typography className={classes.description} style={{ fontWeight: "bold" }}>{this.props.moment.ownerName}</Typography>
                  <Typography className={classes.description}>{this.props.moment.description}</Typography>
                  <div className={classes.numbers}>
                    {/* <span className={classes.description}>4</span><Favorite style={{ color: "red", fontSize: "inherit", margin: "0 12px 0 3px" }} /> */}
                    <span className={classes.description}>{this.props.moment.commentsNumber}</span><ChatBubbleOutline style={{ fontSize: "inherit", marginLeft: 3, marginRight: 24 }} />
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} className={classes.date}>
                  <div className={classes.numbers}>
                    {/* <FavoriteBorder style={{ marginRight: 3 }} /> <Typography style={{ display: "inline", marginRight: 16 }}>Curtir</Typography> */}
                    <ChatBubbleOutline /> <Typography style={{ marginRight: 5 }} onClick={this.handleOpen} >Comentar</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {
            this.state.open && <CommentModal reference={this.props.moment.idMoment} open={true} handler={this.handleClose} />
          }
          {/* <MomentModal handleClose={this.handleClose} reference={this.props.reference} urlBucket={this.props.urlBucket} open={this.state.open} /> */}
        </div>
      </>
    )
  }
}

export default withStyles(styles)(MomentMobile)