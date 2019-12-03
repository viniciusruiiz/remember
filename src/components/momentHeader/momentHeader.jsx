import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './momentHeaderStyles'
import Moment from '../moment/moment';
import perfil from './../../images/perfil.jpg'
import MomentDown from '../moment/momentDown';
import { Typography, Grid } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

class MomentHeader extends Component {

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

    let date = this.formatDate(new Date(this.props.date));

    return (
      <>
        <div className={classes.root}>
          {/* <MoreVert style={{ float: 'right' }}></MoreVert> */}
          <Grid container>
            <Grid>
              <img alt='' src={this.props.ownerPicture} className={classes.donoImg} />
            </Grid>
            <Grid>
              <Typography display='inline' className={classes.donoName}>{this.props.person}</Typography>
              <Typography className={classes.momentDate}>{date}</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.description}>{this.props.description}</Typography>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(MomentHeader)