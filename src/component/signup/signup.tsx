import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import SignUpService from '../../service/signUpService';
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask';

export default class SignUp extends Component<{}, SignUpRequest> {

    _ss: SignUpService;

    static contextTypes = {
        router: PropTypes.object
    }

    constructor() {
        super({});
        this.state = { username: '', password: '', name: '', nickname: '', phone_number: '' } // validate birthdate
        this._ss = new SignUpService();

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNickname = this.handleNickname.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleName(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: event.target.value });
    }

    handleNickname(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ nickname: event.target.value });
    }

    handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ phone_number: event.target.value });
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        this._ss.signUp(this.state).then((res) => {
            if (res.data.success) {
                alert("cadastrado com sucesso");
                this.context.router.history.push('/secret');
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Tela de Cadastros</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email" onChange={this.handleUsername}></input>
                    <br/>
                    <input type="password" placeholder="Senha" onChange={this.handlePassword}></input>
                    <br/>
                    <input placeholder="Nome" onChange={this.handleName}></input>
                    <br/>
                    <input placeholder="Apelido" onChange={this.handleNickname}></input>
                    <br/>
                    <MaskedInput mask={["/[+]/", "/\g/", " ", "(", "/\g/", "/\g/", ")", "/\g/","/\g/","/\g/","/\g/","/\g/","-","/\g/","/\g/","/\g/","/\g/",]} placeholder="Telefone" onChange={this.handlePhone}></MaskedInput>
                    <br/>
                    <br/>
                    <input type="submit" value="Cadastrar"></input>
                    <Link to="/">Já tenho uma conta</Link>
                </form>
            </div>
        );
    }
}