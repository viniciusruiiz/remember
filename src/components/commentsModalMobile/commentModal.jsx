import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './commentModalStyles'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, TextField, InputAdornment, Grid } from '@material-ui/core';
import { Favorite, NavigateNext } from '@material-ui/icons';
import perfil from './../../images/perfil.jpg'
import CommentService from '../../service/commentService';
import compose from 'recompose/compose';
import { withRouter } from 'react-router';
import BaseService from '../../service/baseService';

class CommentModal extends Component {

  _cs = new CommentService();

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
      comments: [],
      comment: '',
      pushed: false,
    }

    this._cs.getComments(this.props.reference).then(res => {
      this.setState({ comments: res.data.data });
    }).catch(err => { alert("ERRO AO PEGAR OS COMENTARIOS") });
  }

  componentWillMount() {
    const { history } = this.props;

    if (!this.state.pushed) {
      this.setState({ pushed: false })

      history.push({
        pathname: this.props.location.pathname,
        search: this.props.location.search
      });
    }

    window.addEventListener("popstate", () => {
      if (this.state.open) {
        this.props.handler()
        //history.go(1);
      }
    });
  }

  handleSubmit = (e) => {

    //e.preventDefault();

    let comment = this.state.comment;

    this.setState({ comment: '' })

    this._cs.comment(this.props.reference, comment).then(res => {
      let newState = Object.assign({}, this.state);
      newState.comments.push({
        ownerName: BaseService.currentName,
        ownerPic: BaseService.currentUserPic,
        creationDate: new Date().toString(),
        content: comment
      })
      this.setState(newState);
    }).catch(err => { alert("ERRO AO COMENTAR") });
  }

  handleCommentContent = (e) => {
    this.setState({ 'comment': e.target.value });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <Dialog
          fullScreen={true}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title" style={{ marginBottom: "1px solid rgba(0,0,0,.4)" }}><div style={{ float: "left" }}>Comentários</div>{/*<Favorite style={{ float: "right", color: "red", marginTop: 3 }} />*/}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
          </DialogContentText> */}
            <Grid container>
              <Grid xs={12}>
                {this.state.comments.map(comment => (
                  <>
                    <div className={classes.comment}>
                      <img className={classes.ownerPic} src={comment.ownerPic}></img>
                      <Typography style={{ fontWeight: "bold" }}>
                        {comment.ownerName}
                      </Typography>
                      <Typography>
                        {comment.content}
                      </Typography>
                    </div>
                    <br />
                  </>
                ))
                }
              </Grid>
            </Grid>

          </DialogContent>
          <DialogActions>
            <TextField
              fullWidth
              value={this.state.comment}
              onChange={this.handleCommentContent}
              placeholder="Comentário..."
              InputProps={{
                endAdornment: (<InputAdornment position="end" onClick={this.handleSubmit}>
                  <NavigateNext />
                </InputAdornment>)
              }}
            />
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default compose(withRouter, withStyles(styles))(CommentModal)