import React, { Component } from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import styles from './lineStyles'
import Moment from '../moment/moment';
import MomentMobile from '../momentMobile/momentMobile';
import MomentDown from '../moment/momentDown';

class Line extends Component {
  
  constructor(props) {
    super(props)

    let boolean = 650 > window.screen.innerWidth

    this.state = {
      mobile: boolean,
    }

    this.updatePredicate = this.updatePredicate.bind(this);
    // console.log("after", window.innerWidth)
    // this.updatePredicate();
    // console.log("before", window.innerWidth)
  }
  
  componentDidMount() {
    //console.log("2", window.innerWidth)
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    //console.log("3" ,window.innerWidth)
    let boolean = 650 > window.screen.width;
    //console.log(boolean)
    this.setState({ mobile: boolean });
    //console.log("AAAAAAAAAA", this.state.mobile)
  }


  desktopView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = 'hidden'

    return (
    <Grid alignItems="center" className={classes.root}>
    {this.props.data.map((moment) => (
            i++ % 2 === 0 ?
            <Moment urlBucket={moment.urlBucket} creationDate={moment.creationDate} desc={moment.description} reference={moment.idMoment} />
            :
            <MomentDown urlBucket={moment.urlBucket} creationDate={moment.creationDate} person={'Yudi'} desc={moment.description} reference={moment.idMoment}/>
        ))}
    </Grid>
    )
  }

  mobileView() {
    const { classes } = this.props
    let i = 0
    document.body.style.overflowY = null

    return (

        <Grid alignItems="center">
        {this.props.data.reverse().map((moment) => (
                <MomentMobile urlBucket={moment.urlBucket} creationDate={moment.creationDate} reference={moment.idMoment} />
            ))}
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