import React, { Component } from 'react';
import styles from './momentModalStyles';
import { withStyles } from '@material-ui/core/styles';
import { Modal, Grid, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Comment from './../comment/comment'
import MomentHeader from '../momentHeader/momentHeader';
import CommentService from '../../service/commentService';
import compose from 'recompose/compose';
import BaseService from '../../service/baseService';

class MomentModal extends Component {

  _cs = new CommentService();
  idComment = 1;

  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      comments: [],
      open: this.props.open
    }

    this._cs.getComments(this.props.reference).then(res => {
      this.setState({ 'comments': res.data.data });
    }).catch(err => { alert("ERRO AO PEGAR OS COMENTARIOS") });
  }

  handleCommentContent = (e) => {
    this.setState({ 'comment': e.target.value });
  }

  handleSubmit = (e) => {

    e.preventDefault();

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

  render() {
    const { classes } = this.props
    var modalStyle = { focus: { outline: 'none' } }

    //let date = this.formatDate(new Date(this.props.date));

    return (
      <>
        <Modal BackdropProps={{ style: { background: 'rgba(0,0,0,0.8)' } }} style={modalStyle} className={classes.modal} open={this.state.open} onClose={this.props.handleClose}>
          <Grid style={{ outline: 'none' }} justify='center' container >
            <Grid container alignItems='center' style={{ width: 'initial', textAlign: 'center', backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
              <Grid item>
                <img alt='descrição da imagem || momento' src={this.props.urlBucket} className={classes.imgLightBox} />
              </Grid>
            </Grid>
            <Grid className={classes.content} xs={3}>
              {/* <RSC className={classes.RSC}> */}
              <div className={classes.RSC}>
                <MomentHeader ownerPicture={this.props.moment.ownerPicture} person={this.props.moment.ownerName} date={this.props.date} description={this.props.desc} />
                {

                  this.state.comments.map(comment => (
                    // <Comment key={comment.owner} person={comment.owner} date={() => this.formatDate(new Date(comment.creationDate))}  content={comment.content}/>
                    <Comment key={this.idComment++} person={comment.ownerName || comment.ownerUsername} date={comment.creationDate} ownerPic={comment.ownerPic} content={comment.content} />
                  ))
                }
                {/* <Comment person='Vinicius Ruiz' date='2 de março de 2019' content='Foi demais mano!'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Foi demais mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano mano'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Foi demais manovelho, curti muito!'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Ameeeei esse dia com voces! amo voces velho serio! nossa que legal'/>
                <Comment person='Lucas Yudi' date='2 de março de 2019' content='Diversao!'/> */}
                {/* </RSC> */}
              </div>
              <form onSubmit={this.handleSubmit}>
                <TextField className={classes.input}
                  id="comment-content"
                  form="form-comment"
                  margin="dense"
                  hiddenLabel
                  value={this.state.comment}
                  variant="filled"
                  autoComplete={false}
                  onChange={this.handleCommentContent}
                  placeholder="Comentário..." />
              </form>
            </Grid>
          </Grid>
        </Modal>
      </>
    )
  }
}

export default compose(withRouter, withStyles(styles))(MomentModal);