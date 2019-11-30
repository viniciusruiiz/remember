import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import styles from './lineStyles'
import Moment from './moment';
import MomentMobile from './momentMobile';
import MomentDown from './momentDown';

class LineLoading extends Component {

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
    document.body.style.overflowY = 'hidden'

    return (
      <Grid alignItems="center" className={classes.root}>
        <Moment>

        </Moment>

        <MomentDown>

        </MomentDown>
        <Moment>

        </Moment>

        <MomentDown>

        </MomentDown>
        <Moment>

        </Moment>

        <MomentDown>

        </MomentDown>
      </Grid>
    )
  }

  mobileView() {
    const { classes } = this.props

    document.body.style.overflowY = null

    return (
      <>
        <Grid alignItems="center">
          <MomentMobile />

        </Grid>
        <Grid alignItems="center">
          <MomentMobile />

        </Grid>
        <Grid alignItems="center">
          <MomentMobile />

        </Grid>
      </>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <>
        {this.state.mobile ? this.mobileView() : this.desktopView()}
      </>
    )
  }
}

export default withStyles(styles)(LineLoading)