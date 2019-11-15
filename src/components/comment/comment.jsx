import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './commentStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';
import { Typography, Grid } from '@material-ui/core';
import useranom from '../../images/anom.jpg'

class Comment extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
        <div className={classes.root}>
          <Grid container>
            <Grid>
              <img alt='' src={this.props.ownerPic || useranom} onError={(e) => e.target.src = useranom} className={classes.commentOwnerPhoto} />
            </Grid>
            <Grid>
              <Typography display='inline' className={classes.commentOwner}>{this.props.person}</Typography>
              <Typography className={classes.date}>{this.props.date}</Typography>
            </Grid>
          </Grid>
            <Typography className={classes.commentContent}>{this.props.content}</Typography>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(Comment)