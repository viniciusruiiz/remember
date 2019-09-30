import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Grid, Paper, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse, Hidden } from '@material-ui/core';
import { Favorite, MoreVert, Share ,ExpandMore } from '@material-ui/icons';
import styles from './lineBoxStyles';
import perfil from './../../images/perfil.jpg';

class LineBox extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      relativeChangeMinutes: Math.abs((new Date().getTime() - this.props.lastChangeInTimestamp) / 60000) || 0
    }
  }
  
  render() {
        const { classes } = this.props

        return (
        <>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.card}>
            {this.props.notificationCount > 0 &&
              <Paper className={classes.notification}>{this.props.notificationCount}</Paper>
            }
            <Card>
              <Grid className={classes.media} container>
                <Grid container xs={9} >
                <img alt='' className={classes.bigImage} src={perfil} />
                </Grid>
                <Grid container xs={3} >
                <img alt='' className={classes.tinyImage} align='top' src={perfil} />
                <img alt='' className={classes.tinyImage} align='top' src={perfil} />
                <img alt='' className={classes.tinyImage} align='top' src={perfil} />
                </Grid>
              </Grid>
              <CardContent className={classes.content}>
                <Grid container>
                  <Grid container xs={5} >
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
                  <Grid container xs={7} alignItems="flex-end" justify="flex-end" className={classes.right} >
                    <img alt='' src={perfil} className={classes.member}/>
                    <img alt='' src={perfil} className={classes.member}/>
                    <IconButton className={classes.options} aria-label="settings">
                      <MoreVert/>
                    </IconButton>
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