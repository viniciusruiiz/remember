import React, { Component } from 'react';
import styles from './momentModalStyles';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal, Typography, Grid, TextField, InputAdornment, Grow } from '@material-ui/core';
import { Link } from 'react-router-dom';
import perfil from './../../images/perfil.jpg'
import { withRouter } from 'react-router-dom';
import Comment from './../comment/comment'
import MomentHeader from '../momentHeader/momentHeader';
import RSC from "react-scrollbars-custom";
import { PersonAdd } from '@material-ui/icons';
import CommentService from '../../service/commentService';
import compose from 'recompose/compose';

class MomentModal extends Component {

  _cs = new CommentService();
  idComment = 1;

  constructor(props) {
    super(props)

    this.state = {
      comment: '',
      comments: []
    }
    
    this._cs.getComments(this.props.reference).then(res => {
      this.setState({'comments':res.data.content});
    }).catch(err => {console.log(err); console.log("ERRO AO PEGAR OS COMENTARIOS")});
  }

  handleCommentContent = (e) => {
    console.log(e.target.value)
    this.setState({'comment': e.target.value});
  }

  handleSubmit = (e) => {

    e.preventDefault();

    let comment = this.state.comment;
    
    this.setState({comment:''})

    this._cs.comment(this.props.reference, comment).then(res => {
      let newState = Object.assign({}, this.state);
      res.data.creationDate = new Date().toString()
      newState.comments.push(res.data)
      this.setState(newState);
    }).catch(err => {console.log(err); console.log("ERRO AO COMENTAR")});
  }

  formatDate(date) {
    let dateFormated = date.getDate() + ' de ';

    switch (date.getMonth()) {
      case 0:
        dateFormated += 'janeiro'
        break;
      case 1:
        dateFormated += 'fevereiro'
        break;
      case 2:
        dateFormated += 'março'
        break;
      case 3:
        dateFormated += 'abril'
        break;
      case 4:
        dateFormated += 'maio'
        break;
      case 5:
        dateFormated += 'junho'
        break;
      case 6:
        dateFormated += 'julho'
        break;
      case 7:
        dateFormated += 'agosto'
        break;
      case 8:
        dateFormated += 'setembro'
        break;
      case 9:
        dateFormated += 'outubro'
        break;
      case 10:
        dateFormated += 'novembro'
        break;
      case 11:
        dateFormated += 'dezembro'
        break;
    }

    dateFormated += ' de ' + date.getFullYear();

    return dateFormated;
  }

  render() {
    const { classes } = this.props
    var modalStyle = {focus: {outline: 'none'}}


    return (
      <>
        <Modal BackdropProps = {{style: {background: 'rgba(0,0,0,0.8)'}}} style={modalStyle} className={classes.modal} open={this.props.open} onClose={this.props.handleClose}>
          <Grid style={{outline: 'none'}} justify='center' container >
            <Grid container alignItems='center' style={{ width:'initial', textAlign: 'center', backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
              <Grid item>
                <img alt='descrição da imagem || momento' src={this.props.urlBucket} className={classes.imgLightBox} />
              </Grid>
            </Grid>
            <Grid className={classes.content} xs={3}>
              {/* <RSC className={classes.RSC}> */}
              <div className={classes.RSC}>
                <MomentHeader person='Vinicius Ruiz' date='2 de março de 2019' description={this.props.desc} />
                {
                  
                  this.state.comments.map(comment => (
                    // <Comment key={comment.owner} person={comment.owner} date={() => this.formatDate(new Date(comment.creationDate))}  content={comment.content}/>
                    <Comment key={this.idComment++} person='Lucas Yudi' date={this.formatDate(new Date(comment.creationDate))}  content={comment.content}/>
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
              <TextField  className={classes.input}
                            id="comment-content"
                            form="form-comment"
                            margin="dense"
                            hiddenLabel
                            value={this.state.comment}
                            variant="filled"
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