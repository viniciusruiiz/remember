import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';
import { Fab, Typography, InputAdornment, IconButton, Paper, MenuList, MenuItem, ClickAwayListener } from '@material-ui/core';
import { Add, NavigateBefore, PersonAdd, MoreVert } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import perfil from './../../images/perfil.jpg'
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

class MemoryLine extends Component {

    _ms = new MomentService()
    _queryString;

    constructor(props) {
        super(props)
        this.state = {
            moments: [],
            openModal: false,
            openMenu: false,
        }

        this._queryString = new URLSearchParams(this.props.location.search)

        this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
            this.setState({ "moments": res.data.data })
        })
    }

    componentWillMount = () => {
        document.body.style.overflowY = 'hidden'
    }
    
    componentWillUnmount = ()=> {
        document.body.style.overflowY = null
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

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
        this.setState({openMenu: !this.state.openMenu})
    };

    handleCloseMenu = () => {
        this._ms.delete(this._queryString.get("ref")).then(res => {
            this.props.history.push('/userhome')
        }).catch(err => console.log('erro inesperado'))
    };

    handleClickAway = () => {
        this.setState({openMenu: false})
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

        document.title = this._queryString.get("title") // passar o nome da memory line

        return (
            <>
                <NavBar />

                <div className={classes.root}>
                    <Typography className={classes.title}>
                        <Link className={classes.link} to='/userhome'><NavigateBefore className={classes.back} /></Link>
                        {this._queryString.get("title") || 'Memoryline Title'}
                    </Typography>
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
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <IconButton className={classes.options} aria-label="settings" onClick={this.handleClick}>
                                <MoreVert/>
                                {this.state.openMenu && 
                                <Paper className={classes.paper}>
                                    <MenuList>
                                        <MenuItem onClick={this.handleCloseMenu}>Apagar MemoryLine</MenuItem>
                                    </MenuList>
                                </Paper>
                                }
                            </IconButton>
                        </ClickAwayListener>
                    </div>
                    
                    <Line data={this.state.moments} />

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

export default compose(withRouter, withStyles(styles))(MemoryLine)