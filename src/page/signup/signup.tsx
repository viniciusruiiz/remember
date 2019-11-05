import React, { Component } from 'react';
import styles from './signupStyles';
import { Link, withRouter } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import SignUpService from '../../service/signUpService';
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
    private _pwdConfirmation : string;

    constructor(o : any = {}) {
        super(o);
        this.state = { username: '', password: '', first_name: '', last_name: '', birth_date: '', email: ''} // validate birthdate
        this._ss = new SignUpService();

        this._pwdConfirmation = '';
    }

    handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    }

    handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    }

    handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ first_name: event.target.value });
    }

    handleLName = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ last_name: event.target.value });
    }

    handleNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ username: event.target.value });
    }

    handleBirthdate = (event: React.ChangeEvent<HTMLInputElement>) => {
        //TODO: mask
        this.setState({ birth_date: event.target.value });
    }

    handlePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
        this._pwdConfirmation = event.target.value;
    }

    // handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
    //     this.setState({ phone_number: event.target.value });
    // }

    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        //validation

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
                            <CssTextField fullWidth className={classes.inputEsquerda} label="Nome" id="name" onChange={this.handleName} />
                            <CssTextField fullWidth className={classes.inputDireita} label="Sobrenome" id="last-name" onChange={this.handleLName} />
                            <CssTextField fullWidth className={classes.inputLogin} label="E-mail" id="email" onChange={this.handleUsername} />
                            <CssTextField fullWidth className={classes.inputLogin} label="Username" id="username" onChange={this.handleNickname} />
                            <CssTextField fullWidth className={classes.inputLogin} label="Senha" id="password" onChange={this.handlePassword} />
                            <CssTextField fullWidth className={classes.inputSenha} label="Confirmar Senha" id="confirm-password" onChange={this.handlePasswordConfirmation}/>
                            <CssTextField fullWidth className={classes.inputLogin} label="Data de Nascimento" id="birth-date" onChange={this.handleBirthdate} />
                            <Button fullWidth className={classes.loginButton} onClick={this.handleSubmit} color="primary" variant="contained" type="submit">
                                CADASTRAR
                            </Button>
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