import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
class MomentDown extends Component {
  
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
        <Link to={`#`}>
          <img alt='' onLoad={this.handleImageLoaded.bind(this)} src={this.props.urlBucket} className={classes.img} />
        </Link>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentDown)