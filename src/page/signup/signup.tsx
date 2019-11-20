import React, { Component } from 'react';
import styles from './signupStyles';
import { Link, withRouter } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import SignUpService from '../../service/signUpService';
import { withStyles, Grid, Paper, Button, Typography, TextField } from '@material-ui/core';
import LinearLoading from '../../components/linearLoading/linearLoading';

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

class SignUp extends Component<any, any> {

    private _ss: SignUpService;
    private _pwdConfirmation: string;

    constructor(o: any = {}) {
        super(o);
        this.state = { username: '', password: '', first_name: '', last_name: '', birth_date: '', email: '', loading: false, errorPasswordDidNotMatch: false, defaultError: false, preenchaTodosOsCampos: false } // validate birthdate
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
        this.setState({ birth_date: event.target.value });
    }

    handlePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
        this._pwdConfirmation = event.target.value;
    }


    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (this.state.password && this.state.username && this.state.first_name && this.state.last_name && this.state.birth_date && this.state.email && !this.state.loading){

            this.singupMethod();
        } else {
            this.setState({preenchaTodosOsCampos:true});
        }
    }

    singupMethod() {
        this.setState({loading:true})

        if (this._pwdConfirmation !== this.state.password || !this._pwdConfirmation) {
            this.setState({ errorPasswordDidNotMatch: true })
            this.setState({loading:false})
            return;
        }

        let credentials = { username: this.state.username, password: this.state.password, first_name: this.state.first_name, last_name: this.state.last_name, birth_date: this.state.birth_date, email: this.state.email }

        this._ss.signUp(credentials).then((res) => {
            if (res.data.success) {
                this.props.history.push('/singupconfirmation');
            } else {
                this.setState({loading:false})
                this.setState({defaultError:true})
            }
        }).catch(err => { this.setState({defaultError:true}); this.setState({loading:false}) });
    }

    handleEnter = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode == 13 && this.state.password && this.state.username && this.state.first_name && this.state.last_name && this.state.birth_date && this.state.email && !this.state.loading){

            this.singupMethod();
        } else if(event.keyCode == 13 && !this.state.loading) {
            this.setState({preenchaTodosOsCampos:true});
        }
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                {
                    this.state.loading && <LinearLoading />
                }
                <Grid className={classes.fullHeight} container >
                    <Grid container className={classes.container} justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            <Grid container justify="center">
                                <Typography className={classes.title}>Cadastre-se!</Typography>
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputEsquerda} type="text" label="Nome" id="name" onChange={this.handleName} />
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputDireita} type="text" label="Sobrenome" id="last-name" onChange={this.handleLName} />
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputLogin} type="text" label="E-mail" id="email" onChange={this.handleUsername} />
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputLogin} type="text" label="Username" id="username" onChange={this.handleNickname} />
                                <CssTextField onKeyDown={this.handleEnter} 
                                    fullWidth
                                    className={classes.inputLogin}
                                    type="date"
                                    label="Data de Nascimento"
                                    id="birth-date"
                                    onChange={this.handleBirthdate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputLogin} type="password" label="Senha" id="password" onChange={this.handlePassword} />
                                <CssTextField onKeyDown={this.handleEnter} fullWidth className={classes.inputSenha} type="password" label="Confirmar Senha" id="confirm-password" onChange={this.handlePasswordConfirmation} />
                                <Typography hidden={!this.state.errorPasswordDidNotMatch && !this.state.defaultError && !this.state.preenchaTodosOsCampos} className={classes.error}>Ocorreu um erro inesperado :(</Typography>
                                <Button disabled={this.state.loading} fullWidth className={classes.loginButton} onClick={this.handleSubmit} color="primary" variant="contained" type="submit">
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