import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button, MenuItem, Paper, MenuList, ClickAwayListener, Container, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/perfil.jpg';
import compose from 'recompose/compose';
import { Link, withRouter } from 'react-router-dom';
import LoginService from '../../service/loginService';
import ProfileService from '../../service/profileService';
import SearchService from '../../service/searchService';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this._ss = new SearchService();
        this._ps = new ProfileService();

        this.state = {
            anchorEl: null,
            open: false,
            profilePic: '',
            profileName: '',
            openModal: false,
            notifications : [],
        }

        this._ps.getProfile().then(res => {
            console.log(res);
            this.setState({profileName: res.data.data.first_name})
            // this.setState({profilePic: res.data.picture}) sempre null grrr

            console.log(this.state.profileName);
            console.log(this.state.profilePic);
        });

        this._ss.getInvites().then(res => {
            console.log(res)
            if(res.data.data)
                this.setState({notifications:res.data.data});
            else 
                this.setState({notifications:[]});
        }) 
    }

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
        this.setState({open: !this.state.open})
    };

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleClickAway = () => {
        this.setState({open: false})
    };

    handleLogout = () => {
        let _ls = new LoginService();
        _ls.logout();
        this.props.history.push('/');
    }

    acceptInvite = (idInvite, isAccepted) => {
        this._ss.answerInvite(idInvite, isAccepted).then(res => {
            console.log(res)
            alert("aceitado com sucesso!")
        })
    }

    handleCloseNotification = () => {
        this.setState({openModal:false});
    }

    render() {
        const { classes } = this.props

        return (
        <>
            <AppBar className={classes.bar} position="fixed">
                <Container >
                    <Toolbar className={classes.toolbar}>
                        
                        <img alt='' src={logo} className={classes.logoIcon}/>
                        <Typography className={classes.logoText}>remember</Typography>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                        <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                            <Typography className={classes.user}>{this.state.profileName?this.state.profileName:"..."}</Typography>
                            <img alt='' src={perfil} className={classes.perfil}/>
                            {this.state.open && 
                            <Paper className={classes.paper}>
                                <MenuList>
                                    <MenuItem onClick={() => {this.setState({openModal:true})}}>Notificacoes</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                                    <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
                                </MenuList>
                            </Paper>
                            }
                        </Button>
                        </ClickAwayListener>
                    </Toolbar>
                </Container>
            </AppBar>


            <Dialog open={this.state.openModal} onClose={this.handleCloseNotification} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Notificações</DialogTitle>
                    <DialogContent>
                        { this.state.notifications.length > 0 ?
                            <ul>
                                {this.state.notifications.map(item => (
                                    <li> CONVITE PARA MEMORY LINE {item.nameMemoryLine} <br/>
                                        <span onClick={this.acceptInvite(item.idInvite, true)}>ACEITAR</span> | <span onClick={this.acceptInvite(item.idInvite, false)}>>RECUSAR</span>
                                    </li>
                                ))}
                            </ul> : <p>Não existem notificações disponível hihi</p>
                                }
                                <br></br>
                            <button onClick={this.handleCloseNotification}>FECHAR</button>
                    </DialogContent>
                </Dialog>
        </>
        )
    }
}

export default compose(withRouter, withStyles(styles))(NavBar)