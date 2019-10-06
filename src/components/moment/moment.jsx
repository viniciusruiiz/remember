import React, { Component } from 'react';
import styles from './momentStyles';
import { withStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';

class Moment extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
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
          <img alt='' onLoad={this.handleImageLoaded.bind(this)} src={this.props.urlBucket} className={classes.img} />
        </div>
        </>
        )
    }
}

export default withStyles(styles)(Moment)