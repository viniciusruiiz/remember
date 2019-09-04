import React, { Component } from 'react';
import './login.css'
import LoginRequest from '../../model/request/loginRequest';
import LoginService from '../../service/loginService';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Login extends Component<{}, LoginRequest> {

    _ls: LoginService;

    static contextTypes = {
        router: PropTypes.object
      }

    constructor() {
        super({});
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
            .then((res) => {
                if (res.data.success) {
                    console.log('logado com sucesso!');
                    this._ls.setToken(res.data.id_token as string);
                    this.context.router.history.push('/secret');
                } else {
                    console.log('logou n');
                    alert('logou n')
                }
            }).catch(err => { throw err });
    }

    render() {
        return (
            <div>
                <h2>Tela de Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email" onChange={this.handleUsername}></input>
                    <br/>
                    <input type="password" placeholder="Senha" onChange={this.handlePassword}></input>
                    <br/>
                    <Link to="/forgotpassword">Esqueci minha senha</Link>
                    <br/>
                    <input type="submit" value="Entrar"></input>
                    <br/>
                    <Link to="/singup">Criar conta</Link>
                </form>
            </div>
        );
    }
}