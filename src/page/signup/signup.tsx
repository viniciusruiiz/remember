import React, { Component } from 'react';
import styles from './signupStyles';
import { Link, withRouter } from 'react-router-dom';
import SignUpRequest from '../../model/request/signUpRequest';
import SignUpService from '../../service/signUpService';
import { withStyles, Grid, Paper, Button, Typography, TextField, FormControl, FormHelperText } from '@material-ui/core';
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
        this.state = { username: '', password: '', first_name: '', last_name: '', birth_date: '', email: '', loading: false, errorPasswordDidNotMatch: false, defaultError: false, preenchaTodosOsCampos: false, mobile: false, errorUsername: false } // validate birthdate
        this._ss = new SignUpService();

        this._pwdConfirmation = '';
    }

    componentDidMount = () => {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ mobile: window.screen.width < 650 });
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

    //a
    validateUsername = () => {

        //let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.username)
        let validation = /[@]/gm.test(this.state.username);
        this.setState({ errorUsername: !validation});

    }

    validatePassword = () => {

        let p = this.state.password;
        let validation = p.length >= 8 && /[a-z]/gm.test(p) && /[A-Z]/gm.test(p) && /[0-9]/gm.test(p) && /[!@#$%*()_+^&{}}:;?.]/gm.test(p)

        this.setState({ errorPassword: !validation });

        this.validatePasswordConfirmation();
    }

    validateName = () => {
        this.setState({ errorFirst_name: this.state.first_name.length < 1 });
    }

    validateLName = () => {
        this.setState({ errorLast_name: this.state.last_name.length < 1 });
    }

    validateNickname = () => {
        this.setState({ errorNickname: this.state.username.length < 1 });
    }

    validateBirthdate = () => {
        this.setState({ errorBirth_date: (this.state.birth_date == ' ' || !this.state.birth_date) });
    }

    handlePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
        this._pwdConfirmation = event.target.value; 
    }

    validatePasswordConfirmation = () => {
        this.setState({ errorPasswordConfirmation: this._pwdConfirmation != this.state.password });
    }


    handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        this.validateName();
        this.validateLName();
        this.validateUsername();
        this.validateNickname();
        this.validateBirthdate();
        this.validatePassword();
        this.validatePasswordConfirmation();

        if (!(this.state.errorFirst_name || this.state.errorLast_name || this.state.errorUsername || this.state.errorNickname || this.state.errorBirth_date || this.state.errorPassword || this.state.errorPasswordConfirmation)){

            this.singupMethod();
        } else {
            this.setState({preenchaTodosOsCampos:true});
        }
    }

    singupMethod() {
        this.setState({loading:true})

        let credentials = { 
            username: this.state.username, 
            password: this.state.password, 
            first_name: this.state.first_name, 
            last_name: this.state.last_name, 
            birth_date: this.state.birth_date, 
            email: this.state.email 
        }

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

                                <FormControl fullWidth className={this.state.mobile ? classes.inputLogin : classes.inputEsquerda}>
                                    <CssTextField 
                                    type="text" 
                                    label="Nome"
                                    error={this.state.errorFirst_name}
                                    onBlur={this.validateName}
                                    helperText={this.state.errorFirst_name && "Digite seu nome"}
                                    onChange={this.handleName}/>
                                </FormControl>

                                <FormControl fullWidth className={this.state.mobile ? classes.inputLogin : classes.inputDireita}>
                                    <CssTextField 
                                    type="text"
                                    label="Sobrenome"
                                    error={this.state.errorLast_name}
                                    onBlur={this.validateLName}
                                    helperText={this.state.errorLast_name && "Digite seu sobrenome"}
                                    onChange={this.handleLName}/>
                                </FormControl>

                                <FormControl fullWidth className={classes.inputLogin}>
                                    <CssTextField 
                                    type="text"
                                    label="Email"
                                    error={this.state.errorUsername}
                                    onBlur={this.validateUsername}
                                    helperText={this.state.errorUsername && "Digite um email válido"}
                                    onChange={this.handleUsername}/>
                                </FormControl>

                                <FormControl fullWidth className={classes.inputLogin}>
                                    <CssTextField 
                                    type="text"
                                    label="Username"
                                    error={this.state.errorNickname}
                                    onBlur={this.validateNickname}
                                    helperText={this.state.errorNickname && "Digite um username (ele será usado para se logar)"}
                                    onChange={this.handleNickname}/>
                                </FormControl>

                                <FormControl fullWidth className={classes.inputLogin}>
                                    <CssTextField 
                                    type="date"
                                    label="Data de nascimento"
                                    error={this.state.errorBirth_date}
                                    onBlur={this.validateBirthdate}
                                    defaultValue=" "
                                    helperText={this.state.errorBirth_date && "Digite sua data de nascimento"}
                                    onChange={this.handleBirthdate}/>
                                </FormControl>

                                <FormControl fullWidth className={classes.inputLogin}>
                                    <CssTextField 
                                    type="password"
                                    label="Senha"
                                    error={this.state.errorPassword}
                                    onBlur={this.validatePassword}
                                    onChange={this.handlePassword}
                                    helperText={"A senha deve conter ao menos 1 letra maiúscula, minúscula, número e caractere especial"}
                                    />
                                </FormControl>

                                <FormControl fullWidth className={classes.inputSenha}>
                                    <CssTextField 
                                    type="password"
                                    label="Senha"
                                    error={this.state.errorPasswordConfirmation}
                                    onBlur={this.validatePasswordConfirmation}
                                    helperText={this.state.errorPasswordConfirmation && "As senhas não conferem"}
                                    onChange={this.handlePasswordConfirmation}/>
                                </FormControl>


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