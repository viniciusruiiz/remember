import React, { Component } from 'react';
import { withStyles, lighten } from '@material-ui/core/styles'
import LoginRequest from '../../model/request/loginRequest';
import LoginService from '../../service/loginService';
import { Link, withRouter } from 'react-router-dom';
import styles from './loginStyles';
import logo from './../../images/logo-icon.png';
import logoText from './../../images/logo-text.png';
import { Button, Paper, Grid, Typography, TextField, Divider, FormControl, LinearProgress } from '@material-ui/core';
import compose from 'recompose/compose'
import LinearLoading from '../../components/linearLoading/linearLoading';

class Login extends Component<any, any> {

    private _ls: LoginService;

    constructor(o: any = {}) {
        super(o);
        this.state = { password: "", username: "", disabled: false, error: false };    
        this._ls = new LoginService();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (this.state.disabled)
            return;

        this.loginMethod();
    }

    private loginMethod() {
        this.setState({disabled: true})
        var credentials = {password: this.state.password, username: this.state.username}
        this._ls.login(credentials)
            .then(res => {
                if (res.data.success) {
                    this._ls.setAuthenticationToken(res.data.data.access_token as string);
                    this._ls.setRefreshToken(res.data.data.refresh_token as string);
                    this.props.handler();
                    this.props.history.push('/userhome');
                } else {
                    this.setState({error: true})
                }
            this.setState({disabled: false})
            }).catch(err => {
                this.setState({disabled: false, error: true})
            });
    }

    handleEnter(event : React.KeyboardEvent<HTMLInputElement>) {
        if (event.keyCode == 13 && this.state.password && this.state.username && !this.state.disabled){

            this.loginMethod();
        }
    }

    render() {
        const { classes } = this.props
        return (
            <>
                <LinearLoading hidden={!this.state.disabled} />
                <Grid className={classes.fullHeight} container >
                    <Grid container justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            <Grid container justify="center">
                            <div>
                                <img alt="remember" className={classes.logoIcon} src={logo}/>
                                <span className={classes.logoText}>remember</span>
                            </div>
                            <form onSubmit={this.handleSubmit} id="loginForm" style={{display: "none"}}></form>
                            <TextField fullWidth className={classes.inputLogin} label="Usuário / E-mail" id="username" onChange={this.handleUsername} onKeyDown={this.handleEnter} />
                            <TextField fullWidth className={classes.inputSenha} label="Senha" id="password" type="password" onChange={this.handlePassword} onKeyDown={this.handleEnter}/>
                            <Typography hidden={!this.state.error} className={classes.error}>Login falhou!</Typography>
                            <Button fullWidth disabled={this.state.disabled} className={classes.loginButton} id="submit" color="primary" variant="contained" type="submit" form="loginForm">
                                Entrar
                            </Button>
                            <Typography className={classes.type}>Não tem uma conta? <Link className={classes.link} to="/signup">Cadastre-se!</Link></Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default compose(withRouter, withStyles(styles))(Login)