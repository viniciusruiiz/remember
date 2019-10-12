import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
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
        {this.props.data.length > 0 ? this.props.data.map((moment) => (
                i++ % 2 === 0 ?
                <Moment urlBucket={moment.urlBucket} />
                :
                <MomentDown urlBucket={moment.urlBucket}/>
            )) : <Typography className={classes.not}>Nenhum momento salvo.</Typography>}
        </Grid>
        )
    }
}

export default withStyles(styles)(Line)