import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/styles';
class MomentDown extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <div className={classes.circle}>
          <img src={this.props.urlBucket} className={classes.img} />
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentDown)