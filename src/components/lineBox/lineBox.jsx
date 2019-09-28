import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Grid, Paper, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Collapse } from '@material-ui/core';
import { Favorite, MoreVert, Share ,ExpandMore } from '@material-ui/icons';
import styles from './lineBoxStyles';
import logo from './../../images/logo-icon.png';
import perfil from './../../images/perfil.jpg';

class LineBox extends Component {
    render() {
        const { classes } = this.props

        return (
        <>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert/>
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Favorite/>
                </IconButton>
                <IconButton aria-label="share">
                  <Share/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </>
        )
    }
}

export default withStyles(styles)(LineBox)