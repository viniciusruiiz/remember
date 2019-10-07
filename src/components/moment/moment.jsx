import React, { Component } from 'react';
import styles from './momentStyles';
import { withStyles } from '@material-ui/styles';
import { CircularProgress, Modal, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Moment extends Component {
  
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
        <Modal className={classes.modal} open={this.state.open} onClose={this.handleClose}>
          <div>
            <img alt='' src={this.props.urlBucket} className={classes.imgLightBox}/>
          </div>
        </Modal>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(Moment)