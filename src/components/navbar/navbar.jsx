import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles, Button, MenuItem, Paper, MenuList, ClickAwayListener, Container } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/perfil.jpg';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false
        }
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
                            <Typography className={classes.user}>Lucas</Typography>
                            <img alt='' src={perfil} className={classes.perfil}/>
                            {this.state.open && 
                            <Paper className={classes.paper}>
                                <MenuList>
                                    <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Sair</MenuItem>
                                </MenuList>
                            </Paper>
                            }
                        </Button>
                        </ClickAwayListener>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
        )
    }
}

export default withStyles(styles)(NavBar)