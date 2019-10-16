import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';
import { Fab, Typography, InputAdornment, IconButton } from '@material-ui/core';
import { Add, NavigateBefore, PersonAdd, MoreVert } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import perfil from './../../images/perfil.jpg'
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

class MemoryLine extends Component {

    _ms = new MomentService()
    _queryString;

    constructor(props) {
        super(props)
        this.state = {
            moments: [],
            openModal: false
        }

        this._queryString = new URLSearchParams(this.props.location.search)

        this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
            this.setState({ "moments": res.data.data })
        })
    }

    handleClickOpen = () => {
        this.setState({ "openModal": true })
    };

    handleClose = () => {
        this.setState({ "openModal": false })
        setTimeout(() => {
            document.body.style.overflowY = 'hidden'      
          },100)
    };

    // handleFile = (e) => {
    //     this.setState({'file':e.target.files[0]})
    //     console.log(e.target.files[0]);
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     this._fs.getPreSignedUrl(this.state.file).then(res => {
    //         if(res.data.success)
    //            this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
    //                alert(res.data)
    //            }).catch(err => console.log('erro no put:', err))
    //     }).catch(err => console.log(err));
    // }

    render() {
        const { classes } = this.props
        document.body.style.height = '100vh'
        document.body.style.paddingTop = 56
        document.body.style.overflowY = 'hidden'
        document.body.style.paddingRight = 200

        document.title = this._queryString.get("title") // passar o nome da memory line

        return (
            <>
                <NavBar />

                <div className={classes.root}>
                    <Typography className={classes.title}>
                        <Link className={classes.link} to='/userhome'><NavigateBefore className={classes.back} /></Link>
                        {this._queryString.get("title") || 'Memoryline Title'}
                    </Typography>
                    <Line data={this.state.moments} />
                    <div className={classes.membros}>
                        <TextField
                            className={classes.adicionar}
                            margin="dense"
                            hiddenLabel
                            variant="filled"
                            placeholder="Adicionar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PersonAdd /></InputAdornment>,
                                className: classes.adicionarInput,
                                }}
                        />
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <IconButton className={classes.options} aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    </div>

                    <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleClickOpen} >
                        <Add />
                    </Fab>
                </div>

                {/* MODAL ADD MOMENT */}
                <Dialog open={this.state.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                </DialogContentText>
                        {/* <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        /> */}
                        <input
                            accept="image/*"
                            style={{ display: 'block' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span">
                                Upload
  </Button>
                        </label>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Subscribe
                </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default withStyles(styles)(MemoryLine)