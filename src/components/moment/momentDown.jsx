import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MomentModal from '../momentModal/momentModal';
class MomentDown extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loading: true
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
        <div className={classes.circle}>
        {this.renderSpinner()}
          <img alt='' onClick={this.handleOpen} onLoad={this.handleImageLoaded.bind(this)} src={this.props.urlBucket} className={classes.img} />
          <Typography className={classes.date}>2 Mar 2019</Typography>
          <MomentModal handleClose={this.handleClose} urlBucket={this.props.urlBucket} open={this.state.open} />
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentDown)