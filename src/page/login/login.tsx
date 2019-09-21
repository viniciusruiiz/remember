import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import LoginRequest from '../../model/request/loginRequest';
import LoginService from '../../service/loginService';
import { Link, withRouter } from 'react-router-dom';
import styles from './loginStyles';
import logo from './../../images/logo-icon.png';
import logoText from './../../images/logo-text.png';
import { Button, Paper, Grid, Typography, TextField, Divider } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#38B49D',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#38B49D',
      },
    },
  })(TextField);

class Login extends Component<any, LoginRequest> {

    private _ls: LoginService;

    constructor(o: any = {}) {
        super(o);
        this.state = { password: "", username: "" };    
        this._ls = new LoginService();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        this._ls.login(this.state)
            .then(res => {
                if (res.data.success) {
                    this._ls.setAuthenticationToken(res.data.id_token as string);
                    this.props.history.push('/secret');
                } else {
                    alert('Erro: ' + res.data.msg);
                }
            }).catch(err => { throw err });
    }

    render() {
        const { classes } = this.props
        return (
            <>
                <Grid className={classes.fullHeight} container >
                    <Grid container justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            <Grid container justify="center">
                            <img alt="remember" className={classes.logoIcon} src={logo}/><img alt="remember" className={classes.logoText} src={logoText}/>
                            <CssTextField fullWidth className={classes.inputLogin} label="Usuário / E-mail" onChange={this.handleUsername} />
                            <CssTextField fullWidth className={classes.inputSenha} label="Senha" type="password" onChange={this.handleUsername} />
                            <Button fullWidth className={classes.loginButton} color="primary" variant="contained" type="submit">
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

export default withStyles(styles)(Login);
// export default withRouter((withStyles(styles)(Login)));