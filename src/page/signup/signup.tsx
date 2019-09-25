import React, { Component } from 'react';
import styles from './signupStyles';
import { Link, withRouter } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import logo from './../../images/logo-icon.png';
import logoText from './../../images/logo-text.png';
import SignUpService from '../../service/signUpService';
import MaskedInput from 'react-text-mask';
import { withStyles, Grid, Paper, Button, Typography, TextField } from '@material-ui/core';

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

class SignUp extends Component<any, SignUpRequest> {

    private _ss: SignUpService;

    constructor(o : any = {}) {
        super(o);
        this.state = { username: '', password: '', first_name: '', last_name: ''} // validate birthdate
        this._ss = new SignUpService();

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    // handleName(event: React.ChangeEvent<HTMLInputElement>) {
    //     this.setState({ name: event.target.value });
    // }

    // handleNickname(event: React.ChangeEvent<HTMLInputElement>) {
    //     this.setState({ nickname: event.target.value });
    // }

    // handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
    //     this.setState({ phone_number: event.target.value });
    // }

    handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        this._ss.signUp(this.state).then((res) => {
            if (res.data.success) {
                this.props.history.push('/singupconfirmation');
            } else {
                alert('Erro: ' + res.data.error);
            }
        }).catch(err => { throw err });
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Grid className={classes.fullHeight} container >
                    <Grid container className={classes.container} justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            <Grid container justify="center">
                            <Typography className={classes.title}>Cadastre-se!</Typography>
                            <CssTextField fullWidth className={classes.inputEsquerda} label="Nome" onChange={this.handleUsername} />
                            <CssTextField fullWidth className={classes.inputDireita} label="Sobrenome" onChange={this.handleUsername} />
                            <CssTextField fullWidth className={classes.inputLogin} label="E-mail" onChange={this.handleUsername} />
                            <CssTextField fullWidth className={classes.inputLogin} label="Senha" onChange={this.handlePassword} />
                            <CssTextField fullWidth className={classes.inputSenha} label="Confirmar Senha" />
                            {/* <Button fullWidth className={classes.loginButton} onClick={this.handleSubmit} color="primary" variant="contained" type="submit">
                                CADASTRAR
                            </Button> */}
                            <Typography className={classes.type}>Já tem uma conta? <Link className={classes.link} to="/">Faça login!</Link></Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(SignUp);