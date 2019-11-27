import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';
import { Fab, Typography, InputAdornment, IconButton, Paper, MenuList, MenuItem, ClickAwayListener, Grid } from '@material-ui/core';
import { Add, NavigateBefore, PersonAdd, MoreVert, Edit, DeleteOutline } from '@material-ui/icons';
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
import Asynchronous from '../../components/searchMember/searchMember';
import FileService from '../../service/fileService';
import LinearLoading from '../../components/linearLoading/linearLoading';
import SearchService from '../../service/searchService';
import imageCompression from 'browser-image-compression';

class MemoryLine extends Component {

    _ms = new MomentService()
    _mls = new MemoryLineService();
    _fs = new FileService();
    _ss = new SearchService();
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
            loading: true,
            membersearch: '',
            members: [],
            candidatos: [],
            curPage: 1,
            hasMore: false,
        }

        this.getMoments();
    }

    getMoments = () => {
        let page = this.state.curPage;
        this._ms.getAllMoments(this._queryString.get("ref"), page).then(res => {

            let newState = Object.assign({}, this.state);
            newState.moments.push(...res.data.data.moments);
            newState.hasMore = res.data.data.hasNextPage;
            newState.curPage = page + 1;
            this.setState(newState)


            //TODO: Paginate by scroll
            if (this.state.hasMore) {
                this.getMoments();
                console.log("dnv")
                //this.setState({loading:false})
            } else {
                console.log("acabou")
                this.setState({ loading: false })
            }

        })
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        this.resize();
    }

    componentWillMount = () => {
        //document.body.style.overflowY = 'hidden';

        (function () {
            function scrollHorizontally(e) {
                e = window.event || e;
                var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                document.documentElement.scrollLeft -= (delta * 75);
                document.body.scrollLeft -= (delta * 60);
            }
            // Chrome
            document.documentElement.addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.documentElement.addEventListener("DOMMouseScroll", scrollHorizontally, false);
        })();
    }

    componentWillUnmount = () => {
        document.body.style.overflowY = null
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ mobile: window.screen.innerWidth < 650 || window.innerWidth < 650 });
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
        this._mls.delete(this._queryString.get("ref")).then(res => {
            this.props.history.push('/userhome')
        }).catch(err => alert('erro inesperado ao deletar'))
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
                //alert('tem certeza que alterar o nome da memory line?');
                //setar loading
                this._mls.changeName(this._queryString.get("ref"), this.state.title).then(res => {
                    //setar confirmação (status 200)
                    var new_element = ipt.cloneNode(true);
                    ipt.parentNode.replaceChild(new_element, ipt);
                    new_element.setAttribute('readonly', true);
                    new_element.addEventListener('input', this.resize);
                    alert('alterado com sucesso!');
                });

            });
        }
    }

    handleEnter = (event) => {
        if (event.keyCode == 13) {
            if (this.state.membersearch) {
                this._ss.search(this.state.membersearch).then(res => {
                    if (res.status === 201 || res.status === 200)
                        this.setState({ "candidatos": res.data.data });
                    else if (res.status === 204)
                        this.setState({ "candidatos": [{ first_name: "Nenhum resultado encontrado." }] });

                })
            } else {
                this.setState({ "candidatos": [] });
            }
        }
    }

    handleSearch = (e) => {
        this.setState({ "membersearch": e.target.value })
        if (this.state.membersearch.length === 0) this.setState({ "candidatos": [] });
    }

    handleInvite = (_id, name) => {
        this.setState({ loading: true })
        this._ss.invite(this._queryString.get("ref"), _id).then(res => {
            this.setState({ loading: false })
            alert(`${name} convidado(a) para memory line ${this.state.title}!`)
        })
    }

    handleFile = async (e) => {
        this.setState({ loading: true })
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        console.log(`originalFile size ${e.target.files[0].size / 1024 / 1024} MB`);
        let compressedFile = await imageCompression(e.target.files[0], options);
        this.setState({ loading: false })
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
        this.setState({ 'file': compressedFile })
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault()
        this._fs.getPreSignedUrl(this.state.file, this._queryString.get("ref")).then(res => {
            if (res.data.success)
                this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
                    alert("coisado com sucesso");
                }).catch(err => alert('erro no put:', err))
        }).catch(err => alert('erro na criacao da presigned url'));

        this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
            this.setState({ "moments": res.data.data })
        })
    }

    desktopHeader() {
        const { classes } = this.props

        return (
            <>
                <Grid container className={classes.grid}>
                    <Grid className={classes.titleContainer} item md={5} sm={12}>
                        <Typography className={classes.title}>
                            <Link className={classes.link} to='/userhome'><NavigateBefore className={classes.back} /></Link>
                            <span className={classes.hideSpan} id="hide"></span><input readOnly maxLength="28" onInput={this.resize} id="txt" value={this.state.title} className={classes.titleIpt}></input>
                            <Edit onClick={this.handleEdit} className={classes.editIcon} id="edit-icon"></Edit>
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
                                onKeyDown={this.handleEnter}
                                onChange={this.handleSearch}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonAdd /></InputAdornment>,
                                    className: classes.adicionarInput,
                                }}
                            />
                            {this.state.candidatos.length > 0 &&
                                <ul className={classes.candidatos}>
                                    {this.state.candidatos.map(item => (
                                        <li key={item._id} onClick={() => this.handleInvite(item._id, item.first_name)} className={classes.candidato}>{`${item.first_name} ${item.last_name ? item.last_name : ""}`}</li>
                                    ))}
                                </ul>
                            }


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
                                                <MenuItem className={classes.apagar} onClick={this.handleCloseMenu}><DeleteOutline style={{ marginRight: 5 }} /> Apagar MemoryLine</MenuItem>
                                            </MenuList>
                                        </Paper>
                                    }
                                </IconButton>
                            </ClickAwayListener>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }

    mobileHeader() {
        const { classes } = this.props

        return (
            <Grid container spacing={1} className={classes.gridMobile}>

                <div>

                    <Typography className={classes.titleMob}>
                        {this._queryString.get("title") || 'Memoryline Title'}
                    </Typography>
                </div>

                <div className={classes.membersDiv}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <IconButton className={classes.optionsMob} aria-label="settings" onClick={this.handleClick}>
                            <MoreVert />
                            {this.state.openMenu &&
                                <Paper className={classes.paper}>
                                    <MenuList>
                                        <MenuItem className={classes.apagar} onClick={this.handleCloseMenu}><DeleteOutline style={{ marginRight: 5 }} /> Apagar MemoryLine</MenuItem>
                                    </MenuList>
                                </Paper>
                            }
                        </IconButton>
                    </ClickAwayListener>
                    <img alt='' src={perfil} className={classes.membersIconsMob} />
                    <img alt='' src={perfil} className={classes.membersIconsMob} />
                </div>


                <Grid item xs={12} sm={12}>
                    <TextField
                        className={classes.adicionarMob}
                        margin="dense"
                        hiddenLabel
                        variant="filled"
                        placeholder="Adicionar"
                        onKeyUp={this.handleEnter}
                        onChange={this.handleSearch}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonAdd /></InputAdornment>,
                            className: classes.adicionarInput,
                        }}
                    />
                    {this.state.candidatos.length > 0 &&
                        <ul className={classes.candidatos}>
                            {this.state.candidatos.map(item => (
                                <li key={item._id} onClick={() => this.handleInvite(item._id, item.first_name)} className={classes.candidato}>{`${item.first_name} ${item.last_name ? item.last_name : ""}`}</li>
                            ))}
                        </ul>
                    }
                </Grid>

            </Grid>
        )
    }

    render() {
        const { classes } = this.props

        document.title = this._queryString.get("title") // passar o nome da memory line

        return (
            <div className={classes.root} id="root">

                <LinearLoading style={this.state.loading ? { visibility: 'visible' } : { visibility: 'hidden' }} />
                {/* <NavBar /> */}

                {/* <div className={classes.bodyRoot}> */}
                {this.state.mobile ? this.mobileHeader() : this.desktopHeader()}
                {
                    !this.state.loading && this.state.moments.length > 0 ?
                        <Line data={this.state.moments} /> : !this.state.loading && this.state.mobile ? <Typography className={classes.notMobile}>Nenhum momento salvo.</Typography> : !this.state.loading && <Typography className={classes.not}>Nenhum momento salvo.</Typography>
                }

                <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleClickOpen} >
                    <Add />
                </Fab>
                {/* </div> */}

                {/* MODAL ADD MOMENT */}
                <Dialog open={this.state.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <input
                            accept="image/*"
                            style={{ display: 'block' }}
                            id="raised-button-file"
                            // multiple
                            type="file"
                            onChange={this.handleFile}
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
                        <Button onClick={this.handleSubmit} color="primary">
                            Subscribe
                </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default compose(withRouter, withStyles(styles))(MemoryLine)