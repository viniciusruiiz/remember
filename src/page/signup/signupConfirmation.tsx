import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import styles from './signupConfirmationStyles';
import logo from './../../images/logo-icon.png';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose'
import { Button, Grid } from '@material-ui/core';

class SingUpConfirmation extends Component<any, any, any> {

    render() {
        const { classes } = this.props
        return (
            <div>
                 <Grid className={classes.fullHeight} container >
                    <Grid container justify="center" alignItems="center">
                        <Grid  className={classes.inside}>
                            <Grid container justify="center" alignItems="center">
                                <img alt="remember" className={classes.logoIcon} src={logo}/>
                            </Grid>
                            <p className={classes.text}>Cadastrado com sucesso! por favor, confirme seu login com o código enviado ao seu email.</p>
                            <Button onClick={() => { this.props.history.push('/') }} fullWidth className={classes.loginButton} color="primary" variant="contained">
                                Voltar para o login
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default compose(withRouter, withStyles(styles))(SingUpConfirmation)