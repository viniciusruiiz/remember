import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import styles from './lineStyles'
import Moment from '../moment/moment';
import MomentMobile from '../momentMobile/momentMobile';
import MomentDown from '../moment/momentDown';

class Line extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      mobile: false,
    }

    this.updatePredicate = this.updatePredicate.bind(this);
    console.log('a', this.props.data)
    // console.log(this.props.data[0].idComment)
  }
  
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ mobile: window.innerWidth < 650 });
  }


  desktopView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = 'hidden'

    return (
    <Grid alignItems="center" className={classes.root}>
    {this.props.data.length > 0 ? this.props.data.map((moment) => (
            i++ % 2 === 0 ?
            <Moment urlBucket={moment.urlBucket} desc={moment.description} reference={moment.idMoment} />
            :
            <MomentDown urlBucket={moment.urlBucket} person={'Yudi'} desc={moment.description} reference={moment.idMoment}/>
        )) : <Typography className={classes.not}></Typography>}
    </Grid>
    )
  }

  mobileView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = null

    return (
    <Grid alignItems="center">
    {this.props.data.length > 0 ? this.props.data.map((moment) => (
            <MomentMobile urlBucket={moment.urlBucket} reference={moment.idMoment} />
        )) : <Typography className={classes.notMobile}>Nenhum momento salvo.</Typography>}
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