import React, { Component } from 'react';
import styles from './momentDownStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MomentModal from '../momentModal/momentModal';
import img404 from '../../images/not_found.png'

class MomentDown extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
    setTimeout(() => {
      document.body.style.overflowY = 'hidden'      
    },100)
  }

  formatDate(date) {
    let dateFormated = date.getDate() + ' ';

    switch (date.getMonth()) {
      case 0:
        dateFormated += 'Jan'
        break;
      case 1:
        dateFormated += 'Fev'
        break;
      case 2:
        dateFormated += 'Mar'
        break;
      case 3:
        dateFormated += 'Abr'
        break;
      case 4:
        dateFormated += 'Mai'
        break;
      case 5:
        dateFormated += 'Jun'
        break;
      case 6:
        dateFormated += 'Jul'
        break;
      case 7:
        dateFormated += 'Ago'
        break;
      case 8:
        dateFormated += 'Set'
        break;
      case 9:
        dateFormated += 'Out'
        break;
      case 10:
        dateFormated += 'Nov'
        break;
      case 11:
        dateFormated += 'Dez'
        break;
    }

    dateFormated += ' ' + date.getFullYear();

    return dateFormated;
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
          <img alt='' onClick={this.handleOpen} onLoad={this.handleImageLoaded.bind(this)} onError={(e) => e.target.src = img404} src={this.props.urlBucket} className={classes.img} id={"moment-"+this.props.reference} />
          <Typography className={classes.date}>{this.formatDate(new Date(this.props.creationDate))}</Typography>
          { this.state.open ?
            <MomentModal moment={this.props.moment} handleClose={this.handleClose} desc={this.props.desc} reference={this.props.reference} urlBucket={this.props.urlBucket} open={this.state.open} /> 
            : 
            <span hidden></span>
          }
        </div>
        </>
        )
    }
}

export default withStyles(styles)(MomentDown)