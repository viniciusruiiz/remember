import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './momentStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';

class MomentHeader extends Component {
  
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
          <img alt='' src={perfil} className={classes.donoImg} />
          <div className={classes.donoDetail}>
            <p className={classes.donoName}>{this.props.person}</p>
            <p className={classes.momentDate}>{this.props.date}</p>
          </div>
          <p className={classes.description}>{this.props.description}</p>
          <p style={{ margin: "20px 0 20px 10px", color: "whitesmoke" }}>TODO: implement reações</p>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentHeader)