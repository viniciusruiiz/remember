import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/core/styles';

class MomentDown extends Component {


  render() {
    const { classes } = this.props

    return (
      <>
        <div className={classes.circle}>
          <div className={classes.img} />
        </div>
      </>
    )
  }
}

export default withStyles(styles)(MomentDown)