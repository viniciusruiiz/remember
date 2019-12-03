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

  formatDate(date) {
    let dateFormated = date.getDate() + ' de ';

    switch (date.getMonth()) {
      case 0:
        dateFormated += 'janeiro'
        break;
      case 1:
        dateFormated += 'fevereiro'
        break;
      case 2:
        dateFormated += 'março'
        break;
      case 3:
        dateFormated += 'abril'
        break;
      case 4:
        dateFormated += 'maio'
        break;
      case 5:
        dateFormated += 'junho'
        break;
      case 6:
        dateFormated += 'julho'
        break;
      case 7:
        dateFormated += 'agosto'
        break;
      case 8:
        dateFormated += 'setembro'
        break;
      case 9:
        dateFormated += 'outubro'
        break;
      case 10:
        dateFormated += 'novembro'
        break;
      case 11:
        dateFormated += 'dezembro'
        break;
    }

    dateFormated += ' de ' + date.getFullYear();

    return dateFormated;
  }

  render() {
    const { classes } = this.props

    let date = this.formatDate(new Date(this.props.date))

    return (
      <>
        <div className={classes.root}>
          <Grid container>
            <Grid>
              <img alt='' src={this.props.ownerPic || useranom} onError={(e) => e.target.src = useranom} className={classes.commentOwnerPhoto} />
            </Grid>
            <Grid>
              <Typography display='inline' className={classes.commentOwner}>{this.props.person}</Typography>
              <Typography className={classes.date}>{date}</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.commentContent}>{this.props.content}</Typography>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Comment)