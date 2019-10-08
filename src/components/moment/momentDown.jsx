import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        <Modal className={classes.modal} open={this.state.open} onChange={(e) => {e.preventDefault()}} onClose={this.handleClose}>
          <div>
            <img alt='' src={this.props.urlBucket} className={classes.imgLightBox}/>
          </div>
        </Modal>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentDown)