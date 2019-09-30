import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Button, Menu, MenuItem } from '@material-ui/core';
import styles from './navbarStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/perfil.jpg';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            setAnchorEl: null,
        }
    }

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
        console.log('oi')
    };

    handleClose = () => {
        this.setState({anchorEl: null})
    };

    render() {
        const { classes } = this.props

        return (
        <>
         <div>
            <AppBar className={classes.bar} position="fixed">
                <Toolbar variant="dense">
                    <img src={logo} className={classes.logoIcon}/>
                    <Typography className={classes.logoText}>remember</Typography>
                    <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                        <Typography className={classes.user}>Lucas</Typography>
                        <img src={perfil} className={classes.perfil}/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                        <MenuItem onClick={this.handleClose}>Sair</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
        </>
        )
    }
}

export default withStyles(styles)(NavBar)