import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Grid, Paper, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Hidden, Button, MenuList, MenuItem } from '@material-ui/core';
import { Favorite, MoreVert, Share, ExpandMore } from '@material-ui/icons';
import styles from './lineBoxLoadingStyles';
import perfil from './../../images/perfil.jpg';
import { Link } from 'react-router-dom';
import imgAleatoria from './../../images/aurora_boreal.jpg';
import img404 from './../../images/not_found.png';

class LineBoxLoading extends Component {

    constructor(props) {
        super(props)
        this.state = {
            relativeChangeMinutes: Math.abs((new Date().getTime() - this.props.lastChangeInTimestamp) / 60000) || 0,
            open: false,
        }
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
        this.setState({ open: !this.state.open })
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    handleClickAway = () => {
        this.setState({ open: false })
    };


    render() {
        const { classes } = this.props

        return (
            <>
                <Grid item xs={12} sm={6} md={4} className={classes.root}>
                    {/* {this.props.notificationCount > 0 &&
              <Paper className={classes.notification}>{this.props.notificationCount}</Paper>
            } */}
                    <Card className={classes.card}>
                        {/* <Link to={`memoryline/?ref=${this.props.reference}&title=${this.props.title}`}> */}
                        <div id="linebox" className={classes.mediaButton}>

                            <Grid className={classes.media} container>

                                <Grid container xs={9} >
                                    <div className={classes.bigImage} />
                                </Grid>

                                <Grid container xs={3} >
                                    <div className={classes.tinyImage} align='top' />
                                    <div className={classes.tinyImage} align='top' />
                                    <div className={classes.tinyImage} align='top' />
                                </Grid>
                            </Grid>

                        </div>
                        {/* </Link> */}
                        <CardContent className={classes.content}>
                            <Grid container>
                                <Grid container xs={6} >
                                    {/* <Grid container xs={12} >
                      <Typography className={classes.title} color="textPrimary">
                      { this.props.title || 'Sem título' }
                      </Typography>
                    </Grid>
                    <Grid container xs={12} >
                      { 
                        this.state.relativeChangeMinutes >= 1440 ?
                        <Typography className={classes.subtitle} color="textSecondary">
                          Alterado {Math.floor(this.state.relativeChangeMinutes / 1440)} dia(s) atrás
                        </Typography>
                        : (
                        this.state.relativeChangeMinutes >= 60 && this.state.relativeChangeMinutes < 1440 ?
                        <Typography className={classes.subtitle} color="textSecondary">
                          Alterado {Math.floor(this.state.relativeChangeMinutes / 60)}h atrás
                        </Typography>
                        :
                        <Typography className={classes.subtitle} color="textSecondary">
                          Alterado {Math.floor(this.state.relativeChangeMinutes)} min atrás
                        </Typography>
                        )
                      }
                    </Grid> */}
                                </Grid>
                                <Grid container xs={6} alignItems="flex-end" justify="flex-end" className={classes.right} >
                                    <div className={classes.member} />
                                    <div className={classes.member} />
                                    {/* <IconButton className={classes.options} aria-label="settings" onClick={this.handleClick}>
                      <MoreVert/>

                      {this.state.open && 
                        <Paper className={classes.paper}>
                            <MenuList>
                                <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                                <MenuItem onClick={this.handleClose}>Sair</MenuItem>
                            </MenuList>
                        </Paper>
                      }
                    </IconButton> */}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(LineBoxLoading)