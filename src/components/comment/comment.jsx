import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './commentStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';
import { Typography } from '@material-ui/core';

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
          <img alt='' src={perfil} className={classes.commentOwnerPhoto} />
          <Typography display='inline' className={classes.commentOwner}>{this.props.person}</Typography>
          <Typography className={classes.commentContent}>{this.props.content}</Typography>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(Comment)