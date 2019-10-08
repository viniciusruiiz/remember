import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './commentStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';

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
          <div className={classes.comment}>
            <p className={classes.commentOwner}>{this.props.person}</p>
          </div>
          <p className={classes.commentContent}>{this.props.content}</p>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(Comment)