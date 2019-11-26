import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Grid, Paper, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Hidden, Button, MenuList, MenuItem } from '@material-ui/core';
import { Favorite, MoreVert, Share ,ExpandMore } from '@material-ui/icons';
import styles from './lineBoxStyles';
import perfil from './../../images/perfil.jpg';
import { Link } from 'react-router-dom';
import imgAleatoria from './../../images/aurora_boreal.jpg';
import img404 from './../../images/not_found.png';

class LineBox extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      relativeChangeMinutes: Math.abs((new Date().getTime() - this.props.lastChangeInTimestamp) / 60000) || 0,
      open: false,
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
          <Grid item xs={12} sm={6} md={4} className={classes.root}>
            {this.props.notificationCount > 0 &&
              <Paper className={classes.notification}>{this.props.notificationCount}</Paper>
            }
            <Card className={classes.card}>
            <Link to={`memoryline/?ref=${this.props.reference}&title=${this.props.title}`}>
              <Button id="linebox" className={classes.mediaButton}> 
                  
              <Grid className={classes.media} container>
                  { this.props.urlMoments[0] || this.props.urlMoments[1] || this.props.urlMoments[2] || this.props.urlMoments[3] ?
                    <>
                    <Grid container xs={!this.props.urlMoments[1] && !this.props.urlMoments[2] && !this.props.urlMoments[3] ? 12 : this.props.urlMoments[0] && this.props.urlMoments[1] && !this.props.urlMoments[2] && !this.props.urlMoments[3] ? 6 : 9} >
                      <img alt='' className={classes.bigImage} src={this.props.urlMoments[0]} onError={e => e.target.src = img404}/>
                    </Grid>

                    <Grid container xs={this.props.urlMoments[1] && !this.props.urlMoments[2] && !this.props.urlMoments[3] ? 6 : 3} >
                      {this.props.urlMoments[1] && <img alt='' className={!this.props.urlMoments[2] && !this.props.urlMoments[3] ? classes.bigImage : this.props.urlMoments[2] && !this.props.urlMoments[3] ? classes.middleImage : classes.tinyImage} align='top' src={this.props.urlMoments[1]} onError={e => e.target.src = img404} />}
                      {this.props.urlMoments[2] && <img alt='' className={this.props.urlMoments[3] ? classes.tinyImage : classes.middleImage} align='top' src={this.props.urlMoments[2]} onError={e => e.target.src = img404} />}
                      {this.props.urlMoments[3] && <img alt='' className={classes.tinyImage} align='top' src={this.props.urlMoments[3]} onError={e => e.target.src = img404} />}
                    </Grid>
                    </>
                    :
                    <Grid container xs={12}>
                      <img alt='' className={classes.bigImage} src={imgAleatoria} />
                    </Grid>
                  }
                  </Grid>
                  
                </Button>
              </Link>
              <CardContent className={classes.content}>
                <Grid container>
                  <Grid container xs={6} >
                    <Grid container xs={12} >
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
                    </Grid>
                  </Grid>
                  <Grid container xs={6} alignItems="flex-end" justify="flex-end" className={classes.right} >
                    <img alt='' src={perfil} className={classes.member}/>
                    <img alt='' src={perfil} className={classes.member}/>
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

export default withStyles(styles)(LineBox)