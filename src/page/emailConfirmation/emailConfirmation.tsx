import React, { Component } from 'react';
import LoginRequest from '../../model/request/loginRequest';
import SignUpService from '../../service/signUpService';
import { withRouter } from 'react-router';
import './emailConfirmation.css';

class EmailConfirmation extends Component<any, LoginRequest> {

    private _ss: SignUpService;

    constructor(o : any = {}) {
        super(o);
        this.state = { username: '', password: '', code: '' };
        this._ss = new SignUpService();

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCode = this.handleCode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleCode(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ code: event.target.value });
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {

        event.preventDefault();

        this._ss.confirmSignUp(this.state).then(res => {
            if (res.data.success) {
                this.props.history.push('/secret');
            } else {
                alert('Erro: ' + res.data.msg);
            }
        }).catch(err => { throw err });
    }

    render() {
        return (
            <div>
                <h2>Confirmar cadastro</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email" onChange={this.handleUsername}></input>
                    <br />
                    <input type="password" placeholder="Senha" onChange={this.handlePassword}></input>
                    <br />
                    <input placeholder="Código de confirmação" onChange={this.handleCode}></input>
                    <br />
                    <input type="submit" value="Entrar"></input>
                </form>
            </div>
        );
    }
}


export default withRouter(EmailConfirmation);