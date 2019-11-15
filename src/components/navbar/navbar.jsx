import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button, MenuItem, Paper, MenuList, ClickAwayListener, Container, Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/perfil.jpg';
import compose from 'recompose/compose';
import { Link, withRouter } from 'react-router-dom';
import LoginService from '../../service/loginService';
import ProfileService from '../../service/profileService';
import SearchService from '../../service/searchService';
import { Notifications, NotificationsOutlined, DoneRounded, ClearRounded } from '@material-ui/icons';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this._ss = new SearchService();
        this._ps = new ProfileService();

        this.state = {
            open: false,
            profilePic: '',
            profileName: '',
            openModal: false,
            notifications: [],
            openNotif: false,
        }

        this._ps.getProfile().then(res => {
            console.log(res);
            this.setState({ profileName: res.data.data.first_name })
        });

        this._ss.getInvites().then(res => {
            console.log(res)
            console.log(res.data.content)
            if (res.data.content)
                this.setState({ notifications: res.data.content });
            else
                this.setState({ notifications: [1,2,3] });
        })
    }

    handleClick = (event) => {
        this.setState({ open: !this.state.open })
    };

    handleClickNotif = (event) => {
        this.setState({ openNotif: !this.state.openNotif })
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    handleClickAway = () => {
        this.setState({ open: false })
    };

    handleClickAwayNotif = () => {
        this.setState({ openNotif: false })
    };

    handleLogout = () => {
        let _ls = new LoginService();
        _ls.logout();
        this.props.history.push('/');
    }

    acceptInvite = (idInvite, isAccepted) => {
        console.log(isAccepted)
        this.setState({ openNotif: false })
        this._ss.answerInvite(idInvite, isAccepted).then(res => {
            console.log(res)
            alert("Convite aceito!")
        })
    }

    render() {
        const { classes } = this.props

        return (
            <>
                <AppBar className={classes.bar} position="fixed">
                    <Container >
                        <Toolbar className={classes.toolbar}>

                            <img alt='' src={logo} className={classes.logoIcon} />
                            <Typography className={classes.logoText}>remember</Typography>
                            <ClickAwayListener onClickAway={this.handleClickAway}>
                                <div>
                                <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                    <Typography className={classes.user}>{this.state.profileName ? this.state.profileName : "..."}</Typography>
                                    <img alt='' src={perfil} className={classes.perfil} />
                                    {this.state.open &&
                                        <Paper className={classes.paper}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                                                <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
                                            </MenuList>
                                        </Paper>
                                    }
                                </Button>
                                </div>
                            </ClickAwayListener>
                            <ClickAwayListener onClickAway={this.handleClickAwayNotif}>
                                <div>
                                    <Button className={classes.buttonNotif} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClickNotif}>
                                        <NotificationsOutlined className={classes.notifications} />
                                    </Button>
                                    {this.state.openNotif &&
                                            <Paper className={classes.paperNotif}>
                                                {this.state.notifications.length > 0 ?
                                                        this.state.notifications.map(item => (
                                                            <Grid container className={classes.invite} spacing={2} >
                                                                <Grid alignItems="center" container>
                                                                    <Grid item xs={9}>
                                                                            <Typography>
                                                                                <span className={classes.bold}>João</span>
                                                                                <span className={classes.font14} > está te convidando para </span>
                                                                                <span className={classes.bold}>{item.nameMemoryLine}</span>
                                                                            </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={3}>
                                                                        <Button style={{color:'#45d34f'}} className={classes.btnInvite} onClick={() => {this.acceptInvite(item.idInvite, true)}} ><DoneRounded /></Button><br/>
                                                                        <Button style={{color:'#a3a3a3'}} className={classes.btnInvite} onClick={() => {this.acceptInvite(item.idInvite, false)}} ><ClearRounded /></Button>
                                                                    </Grid>
                                                                </Grid>
                                                                { item == this.state.notifications[this.state.notifications.length-1] ?
                                                                    <span></span> : <hr style={{width:'100%', border: '1px solid #dbdbdb'}} />
                                                                    }
                                                            </Grid>
                                                        ))
                                                    : <p>Não existem notificações disponível hihi</p>
                                                }
                                            </Paper>
                                        }
                                </div>
                            </ClickAwayListener>
                        </Toolbar>
                    </Container>
                </AppBar>
            </>
        )
    }
}

export default compose(withRouter, withStyles(styles))(NavBar)