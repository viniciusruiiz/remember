import React, { Component } from 'react';
import styles from './momentStyles';
import { withStyles } from '@material-ui/styles';

class moment extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <div className={classes.circle}/>
        </>
        )
    }
}

export default withStyles(styles)(moment)