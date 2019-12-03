import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import styles from './lineStyles'
import Moment from '../moment/moment';
import MomentMobile from '../momentMobile/momentMobile';
import MomentMobileLoading from '../lineLoading/momentMobile';
import MomentDown from '../moment/momentDown';
import MomentDownLoading from '../lineLoading/momentDown';
import MomentLoading from '../lineLoading/moment';

class Line extends Component {

  constructor(props) {
    super(props)

    let boolean = 650 > window.screen.innerWidth

    this.state = {
      mobile: boolean,
    }

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    let boolean = 650 > window.screen.width;
    this.setState({ mobile: boolean });
  }


  desktopView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = 'hidden'

    return (
      <Grid alignItems="center" className={classes.root}>
        {this.props.data.map((moment) => (
          i++ % 2 === 0 ?
            <Moment handlerOpen={this.props.handlerOpen} handlerClose={this.props.handlerClose} moment={moment} urlBucket={moment.urlBucket} creationDate={moment.creationDate} desc={moment.description} reference={moment.idMoment} />
            :
            <MomentDown handlerOpen={this.props.handlerOpen} handlerClose={this.props.handlerClose} moment={moment} urlBucket={moment.urlBucket} creationDate={moment.creationDate} person={'Yudi'} desc={moment.description} reference={moment.idMoment} />
        ))}
        {
          this.props.hasMore &&
          <>
            <MomentLoading>

            </MomentLoading>
            <MomentDownLoading>

            </MomentDownLoading>
          </>
        }
      </Grid>
    )
  }

  mobileView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = null

    return (

      <Grid alignItems="center">
        {this.props.data.map((moment) => (
          <MomentMobile moment={moment} urlBucket={moment.urlBucket} creationDate={moment.creationDate} reference={moment.idMoment} />
        ))}
        {this.props.hasMore &&
          <MomentMobileLoading>

          </MomentMobileLoading>
        }
      </Grid>

    )
  }

  render() {
    const { classes } = this.props
    let i = 0

    return (
      <>
        {this.state.mobile ? this.mobileView() : this.desktopView()}
      </>
    )
  }
}

export default withStyles(styles)(Line)