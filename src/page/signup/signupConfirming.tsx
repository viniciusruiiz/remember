import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import styles from './signupConfirmationStyles';
import logo from './../../images/logo-icon.png';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose'
import { Button, Grid } from '@material-ui/core';
import LinearLoading from '../../components/linearLoading/linearLoading';

class SingUpConfirming extends Component<any, any, any> {

  constructor(o: any = {}) {
    super(o);
    this.state = { disabled: true }; 
  }

    render() {
        const { classes } = this.props
        return (
            <div>
              <LinearLoading hidden={!this.state.disabled} />
              <Grid className={classes.fullHeight} container >
                <Grid container justify="center" alignItems="center">
                    <Grid  className={classes.inside}>
                        <Grid container justify="center" alignItems="center">
                            <img alt="remember" className={classes.logoIcon} src={logo}/>
                        </Grid>
                        <p className={classes.text}>Confirmando sua conta...</p>
                    </Grid>
                </Grid>
              </Grid>
            </div>
        );
    }
}

export default compose(withRouter, withStyles(styles))(SingUpConfirming)