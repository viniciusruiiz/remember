import React, { Component } from 'react';
import { withStyles, Grid } from '@material-ui/core';
import styles from './lineStyles'
import Moment from '../moment/moment';
import MomentDown from '../moment/momentDown';

class Line extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props
        let i = 0

        return (
        <Grid alignItems="center" className={classes.root}>
        {this.props.data.map((moment) => (
                i++ % 2 === 0 ?
                <Moment urlBucket={moment.urlBucket} />
                :
                <MomentDown urlBucket={moment.urlBucket}/>
            ))}
        </Grid>
        )
    }
}

export default withStyles(styles)(Line)