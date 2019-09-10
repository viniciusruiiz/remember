import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import LoginRequest from '../../model/request/loginRequest';
import LoginService from '../../service/loginService';
import { Link } from 'react-router-dom';
import styles from './loginStyles';

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
                    alert('Erro: '+ res.data.msg);
                }
            }).catch(err => { throw err });
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.popo}>
                <h2>Tela de Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email" onChange={this.handleUsername}></input>
                    <br />
                    <input type="password" placeholder="Senha" onChange={this.handlePassword}></input>
                    <br />
                    {/* <Link to="">Esqueci minha senha</Link> */}
                    <br />
                    <input type="submit" value="Entrar"></input>
                    <br />
                    <Link to="/signup">Criar conta</Link>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(Login);