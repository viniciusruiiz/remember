import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import SignUpService from '../../service/signUpService';
import PropTypes from 'prop-types'

export default class SignUp extends Component<{}, SignUpRequest> {
    
    _ss: SignUpService;

    static contextTypes = {
        router: PropTypes.object
      }

    constructor(){
        super({});
        this.state = { username: '', password: '', name: '', nickname: '', phone_number: '' } // validate birthdate
        this._ss = new SignUpService();
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        this._ss.signUp(this.state).then((res) => {
            if(res.data.success){
                this.context.router.history.push('/secret');
            }
        });

        // this._ls.login(this.state)
        //     .then((res) => {
        //         if (res.data.success) {
        //             console.log('logado com sucesso!')
        //             alert('logou!');
        //             this._ls.setToken(res.data.id_token as string)
        //         } else {
        //             console.log('logou n');
        //             alert('logou n')
        //         }
        //     }).catch(err => { throw err });
    }
}