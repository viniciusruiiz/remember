import React, { Component } from 'react';
import styles from './momentMobileStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import MomentModal from '../momentModal/momentModal';

class MomentMobile extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    setTimeout(() => {
      document.body.style.overflowY = 'hidden'      
    },100)
  }

  handleImageLoaded = () => {
    this.setState({ loading: false });
  }

  renderSpinner() {
    const { classes } = this.props

    if (!this.state.loading) {
      return null;
    }
    return (
      <>
        <span className={classes.filter} />
        <CircularProgress className={classes.load}/>
      </>
    );
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <div className={classes.root}>
          {/* {this.renderSpinner()} */}
          <img alt='' onClick={this.handleOpen} onLoad={this.handleImageLoaded.bind(this)} src={this.props.urlBucket} className={classes.img} id={"moment-"+this.props.reference} />
          <Grid className={classes.date} container alignContent='center' alignItems='center'>
            <Grid item>
              <Typography className={classes.dateMonth}>Mar</Typography>
              <Typography className={classes.dateDay}>02</Typography>
              <Typography className={classes.dateYear}>2019</Typography>
            </Grid>
          </Grid>
          {/* <MomentModal handleClose={this.handleClose} reference={this.props.reference} urlBucket={this.props.urlBucket} open={this.state.open} /> */}
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentMobile)