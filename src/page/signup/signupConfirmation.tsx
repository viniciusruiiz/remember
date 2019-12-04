import React, { Component } from 'react';
import './signupConfirmation.css';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SingUpConfirmation extends Component<any, any, any> {

    render() {
        return (
            <div>
                <p>Cadastrado com sucesso! por favor, confirme seu login com o código enviado ao seu email.</p>
                <Link to="/">Voltar para o login</Link>
            </div>
        );
    }
}

export default withRouter(SingUpConfirmation);