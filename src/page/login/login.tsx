import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import LoginRequest from '../../model/request/loginRequest';
import LoginService from '../../service/loginService';
import { Link, withRouter } from 'react-router-dom';
import styles from './loginStyles';
import logo from './../../images/logo-icon.png';
import logoText from './../../images/logo-text.png';
import { Button, Paper, Grid, Typography, TextField, Divider, FormControl } from '@material-ui/core';
import compose from 'recompose/compose'

class Login extends Component<any, LoginRequest> {

    private _ls: LoginService;

    constructor(o: any = {}) {
        super(o);
        this.state = { password: "", username: "" };    
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

        this.loginMethod();
    }

    private loginMethod() {
        this._ls.login(this.state)
            .then(res => {
                if (res.data.success) {
                    this._ls.setAuthenticationToken(res.data.data.access_token as string);
                    this.props.history.push('/userhome');
                } else {
                    console.log('Erro: ' + res.data.error);
                    alert("Setar mensagem de erro")
                }
            }).catch(err => { alert("Setar mensagem de erro inesperado") });
    }

    handleEnter(event : React.KeyboardEvent<HTMLInputElement>) {
        console.log(event.keyCode)
        if (event.keyCode == 13 && this.state.password && this.state.username){

            this.loginMethod();
        }
    }

    render() {
        const { classes } = this.props
        return (
            <>
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
                            <Button fullWidth className={classes.loginButton} id="submit" color="primary" variant="contained" type="submit" form="loginForm">
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