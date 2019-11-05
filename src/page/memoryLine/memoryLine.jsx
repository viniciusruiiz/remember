import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';
import { Fab, Typography, InputAdornment, IconButton, Paper, MenuList, MenuItem, ClickAwayListener, Grid } from '@material-ui/core';
import { Add, NavigateBefore, PersonAdd, MoreVert, Edit } from '@material-ui/icons';
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
import MemoryLineService from '../../service/memoryLineService';

class MemoryLine extends Component {

    _ms = new MomentService()
    _mls = new MemoryLineService();
    _queryString;

    constructor(props) {
        super(props)

        this.updatePredicate = this.updatePredicate.bind(this);

        this._queryString = new URLSearchParams(this.props.location.search)

        this.state = {
            moments: [],
            title: this._queryString.get("title") || 'Memoryline Title',
            openModal: false,
            openMenu: false,
            mobile: false,
        }

        this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
            this.setState({ "moments": res.data.data })
            console.log(res.data.data)
        })
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        this.resize();
        console.log('mount')
    }

    componentWillMount = () => {
        document.body.style.overflowY = 'hidden'
    }

    componentWillUnmount = () => {
        document.body.style.overflowY = null
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ mobile: window.innerWidth < 650 });
    }

    handleClickOpen = () => {
        this.setState({ "openModal": true })
    };

    handleClose = () => {
        this.setState({ "openModal": false })
        setTimeout(() => {
            document.body.style.overflowY = 'hidden'
        }, 100)
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
        this.setState({ openMenu: !this.state.openMenu })
    };

    handleCloseMenu = () => {
        this._ms.delete(this._queryString.get("ref")).then(res => {
            this.props.history.push('/userhome')
        }).catch(err => console.log('erro inesperado'))
    };

    handleClickAway = () => {
        this.setState({ openMenu: false })
    };

    resize = (e) => {
        if (e)
            this.setState({ 'title': e.target.value })

        var hide = document.getElementById('hide');
        var txt = document.getElementById('txt');
        resize();
        txt.addEventListener("input", resize);

        function resize() {
            hide.textContent = txt.value;
            txt.style.width = hide.offsetWidth + "px";
        }

    }

    handleEdit = () => {
        var ipt = document.getElementById('txt');

        if (ipt.hasAttribute('readonly')) {

            ipt.removeAttribute('readonly');
            ipt.focus();
            ipt.addEventListener("focusout", () => {
                //setar confirmação de sim e nao
                alert('tem certeza que alterar o nome da memory line?');
                //setar loading
                this._mls.changeName(this._queryString.get("ref"), this.state.title).then(res => {
                    //setar confirmação (status 200)
                    var new_element = ipt.cloneNode(true);
                    ipt.parentNode.replaceChild(new_element, ipt);
                    new_element.setAttribute('readonly', true);
                    alert('alterado com sucesso!');
                });

            });
        }
    }

    desktopHeader() {
        const { classes } = this.props

        return (
            <Grid container className={classes.grid}>
                <Grid className={classes.titleContainer} item md={5} sm={12}>
                    <Typography className={classes.title}>
                        <Link className={classes.link} to='/userhome'><NavigateBefore className={classes.back} /></Link>
                        <span className={classes.hideSpan} id="hide"></span><input readOnly onInput={this.resize} id="txt" value={this.state.title} className={classes.titleIpt}></input>
                        <Edit onClick={this.handleEdit} className={classes.editIcon}></Edit>
                    </Typography>
                </Grid>
                <Grid alignItems='right' alignContent='right' item md={7} sm={12}>
                    <Grid item className={classes.membros}>
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
                                <MoreVert />
                                {this.state.openMenu &&
                                    <Paper className={classes.paper}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleCloseMenu}>Apagar MemoryLine</MenuItem>
                                        </MenuList>
                                    </Paper>
                                }
                            </IconButton>
                        </ClickAwayListener>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    mobileHeader() {
        const { classes } = this.props

        return (
            <Grid container spacing={1} className={classes.gridMobile}>
                <Grid item className={classes.titleContainer} item xs={6}>
                    <Typography className={classes.title}>
                        {this._queryString.get("title") || 'Memoryline Title'}
                    </Typography>
                </Grid>
                <Grid item className={classes.gridRight} alignItems='right' alignContent='right' xs={6}>
                    <Grid item className={classes.membros}>
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <img alt='' src={perfil} className={classes.membersIcons} />
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <IconButton className={classes.options} aria-label="settings" onClick={this.handleClick}>
                                <MoreVert />
                                {this.state.openMenu &&
                                    <Paper className={classes.paper}>
                                        <MenuList>
                                            <MenuItem onClick={this.handleCloseMenu}>Apagar MemoryLine</MenuItem>
                                        </MenuList>
                                    </Paper>
                                }
                            </IconButton>
                        </ClickAwayListener>
                    </Grid>
                </Grid>
            </Grid>
        )
    }


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
                    {this.state.mobile ? this.mobileHeader() : this.desktopHeader()}

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