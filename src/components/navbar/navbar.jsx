import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button, MenuItem, Paper, MenuList, ClickAwayListener, Container, Dialog, DialogContent, DialogTitle, Grid, CircularProgress } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/anom.jpg';
import compose from 'recompose/compose';
import { Link, withRouter } from 'react-router-dom';
import LoginService from '../../service/loginService';
import ProfileService from '../../service/profileService';
import SearchService from '../../service/searchService';
import { Notifications, NotificationsOutlined, DoneRounded, ClearRounded } from '@material-ui/icons';
import BaseService from '../../service/baseService';

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
            loadingProfile: true,
            mobile: false
        }

        this._ps.getProfile().then(res => {
            this.setState({ profileName: res.data.data.first_name, profilePic: res.data.data.picture, loadingProfile: false })

            BaseService.currentUsername = res.data.data.username;
            BaseService.currentName = res.data.data.first_name + " " + res.data.data.last_name;
            BaseService.currentUserPic = res.data.data.picture;
            BaseService.currentFName = res.data.data.first_name;
            BaseService.currentLName = res.data.data.last_name;

            let self = this;
            BaseService.updateProfile = function (pic, name) {
                self.setState({ profileName: name, profilePic: pic });
            }
        });

        this._ss.getInvites().then(res => {
            this.setState({ notifications: res.data.data });
        })

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ mobile: window.innerWidth < 650 });
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
        this.props.handler();
        this.props.history.push('/');
    }

    acceptInvite = (idInvite, isAccepted) => {
        this.setState({ openNotif: false })
        this._ss.answerInvite(idInvite, isAccepted).then(res => {
            alert("Convite aceito!")

            let newState = Object.assign({}, this.state);
            newState.notifications.splice(newState.notifications.map(e => { return e.idInvite }).indexOf(idInvite), 1);
            this.setState(newState);
        })
    }

    render() {
        const { classes } = this.props

        return (
            <>
                <AppBar className={classes.bar} position="fixed">
                    <Container >
                        <Toolbar className={classes.toolbar}>

                            <img alt='' src={logo} className={this.state.mobile ? classes.logoIconMob : classes.logoIcon} style={{ cursor: "pointer" }} onClick={() => this.props.history.push('/userhome')} />

                            <Typography to="/userhome" className={this.state.mobile ? classes.logoTextMob : classes.logoText} style={{ cursor: "pointer" }} onClick={() => this.props.history.push('/userhome')}>
                                remember
                            </Typography>
                            <ClickAwayListener onClickAway={this.handleClickAway}>
                                <div>
                                    <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                                        {!this.state.mobile && <Typography className={classes.user}>{this.state.profileName ? this.state.profileName : "..."}</Typography>}
                                        {
                                            this.state.loadingProfile ?
                                                <div className={classes.perfil}><CircularProgress size={24} style={{ marginTop: 3 }} /></div>
                                                :
                                                <img alt='' src={this.state.profilePic || perfil} className={this.state.mobile ? classes.perfilMob : classes.perfil} />
                                        }
                                        {this.state.open &&
                                            <Paper className={classes.paper}>
                                                <MenuList>
                                                    <MenuItem onClick={() => { this.props.history.push('/profile') }}>Minha conta</MenuItem>
                                                    <MenuItem id="sair" onClick={this.handleLogout}>Sair</MenuItem>
                                                </MenuList>
                                            </Paper>
                                        }
                                    </Button>
                                </div>
                            </ClickAwayListener>
                            {this.state.notifications.length > 0 &&
                                <Paper className={this.state.mobile ? classes.notificationCountMob : classes.notificationCount}>{this.state.notifications.length}</Paper>
                            }
                            <ClickAwayListener onClickAway={this.handleClickAwayNotif}>
                                <div>
                                    <Button className={this.state.mobile ? classes.buttonNotifMob : classes.buttonNotif} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClickNotif}>
                                        <NotificationsOutlined className={classes.notifications} />
                                    </Button>
                                    {this.state.openNotif &&
                                        <Paper className={classes.paperNotif} style={this.state.notifications.length > 0 ? {} : { padding: 10 }}>
                                            {this.state.notifications.length > 0 ?
                                                this.state.notifications.map((item, index) => (
                                                    <Grid container key={index} className={classes.invite} spacing={2} >
                                                        <Grid alignItems="center" container>
                                                            <Grid item xs={9}>
                                                                <Typography>
                                                                    <span className={classes.bold}>{item.usernameOwner}</span>
                                                                    <span className={classes.font14} > está te convidando para </span>
                                                                    <span className={classes.bold}>{item.nameMemoryLine}</span>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={3}>
                                                                <Button style={{ color: '#45d34f' }} className={classes.btnInvite} onClick={() => { this.acceptInvite(item.idInvite, true) }} ><DoneRounded /></Button><br />
                                                                <Button style={{ color: '#a3a3a3' }} className={classes.btnInvite} onClick={() => { this.acceptInvite(item.idInvite, false) }} ><ClearRounded /></Button>
                                                            </Grid>
                                                        </Grid>
                                                        {index == this.state.notifications.length - 1 ?
                                                            <span></span> : <hr style={{ width: '100%', border: '1px solid #dbdbdb' }} />
                                                        }
                                                    </Grid>
                                                ))
                                                : <span>Não há notificações novas.</span>
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