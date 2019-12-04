import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import LineLoading from '../../components/lineLoading/line';
import MomentService from '../../service/momentService';
import { Fab, Typography, InputAdornment, IconButton, Paper, MenuList, MenuItem, ClickAwayListener, Grid, CircularProgress } from '@material-ui/core';
import { Add, NavigateBefore, PersonAdd, MoreVert, Edit, DeleteOutline, Brush, AddAPhoto } from '@material-ui/icons';
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
import ParticipantsService from '../../service/participantsService';
import ReactTooltip from 'react-tooltip'
import Dropzone from 'react-dropzone'
import { height, maxHeight } from '@material-ui/system';
import BaseService from '../../service/baseService';
import Confirmation from '../../components/confirmation/confirmation'

class MemoryLine extends Component {

    _ms = new MomentService()
    _mls = new MemoryLineService();
    _fs = new FileService();
    _ss = new SearchService();
    _ps = new ParticipantsService();
    _queryString;

    constructor(props) {
        super(props)

        this.updatePredicate = this.updatePredicate.bind(this);

        this._queryString = new URLSearchParams(this.props.location.search)

        this.state = {
            moments: [],
            title: '...',
            openModal: false,
            openModalParticipants: false,
            openMenu: false,
            mobile: false,
            loading: false,
            loadingMoments: true,
            ftLoadingMoments: true,
            membersearch: '',
            members: [],
            candidatos: [],
            loadingCandidatos: false,
            candidatos204: false,
            curPage: 1,
            hasMore: false,
            loadingMembers: true,
            type: "private",
            pic: '',
            description: '',
            deleteConfirmation: false,
            isOwner: false
        }

        this._mls.getOne(this._queryString.get("ref")).then(res => {
            this.setState({ title: res.data.data.name, type: res.data.data.type, isOwner: res.data.data.isOwner })
            if (!this.state.mobile)
                this.resize();

        })

        this._mls.participants(this._queryString.get("ref")).then(res => {
            if (res.data.data.participants.length)
                this.setState({ members: res.data.data.participants, loadingMembers: false })
        })

        this.getMoments();
        BaseService.getNotifications();
    }

    getDocWidth() {
        var D = document;
        return Math.max(
            D.body.scrollWidth, D.documentElement.scrollWidth,
            D.body.offsetWidth, D.documentElement.offsetWidth,
            D.body.clientWidth, D.documentElement.clientWidth
        );
    }

    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    getMoments = () => {
        this.setState({ loadingMoments: true })
        let page = this.state.curPage;
        this._ms.getAllMoments(this._queryString.get("ref"), page).then(res => {

            let newState = Object.assign({}, this.state);
            newState.moments.push(...res.data.data.moments);
            newState.hasMore = res.data.data.hasNextPage;
            newState.curPage = page + 1;
            newState.loadingMoments = false;
            newState.ftLoadingMoments = false;
            this.setState(newState)

        })
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
        this.resize();
    }

    scrollHorizontally(e) {
        {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.documentElement.scrollLeft -= (delta * 75);
            document.body.scrollLeft -= (delta * 75);
        }
    }

    componentWillMount = () => {
        //document.body.style.overflowY = 'hidden';
        let self = this;
        (function () {

            function scroll() {


                if (this.state.mobile) {
                    let windowHeight = this.getDocHeight();
                    if ((window.innerHeight + window.pageYOffset + 300) >= windowHeight) {
                        if (!this.state.loadingMoments) {
                            if (this.state.hasMore) {
                                this.getMoments();
                            }
                        }
                    }
                } else {
                    let windowWidth = this.getDocWidth();
                    if ((window.innerWidth + window.pageXOffset + 750) >= windowWidth) {
                        if (!this.state.loadingMoments) {
                            if (this.state.hasMore) {
                                this.getMoments();
                            }
                        }
                    }
                }
            }

            scroll = scroll.bind(self);

            onscroll = scroll;
            // Chrome
            document.documentElement.addEventListener("mousewheel", self.scrollHorizontally, false);
            // Firefox
            document.documentElement.addEventListener("DOMMouseScroll", self.scrollHorizontally, false);
        })();
    }

    componentWillUnmount = () => {
        document.body.style.overflowY = null
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ mobile: window.screen.innerWidth < 650 || window.screen.width < 650 });
    }

    handleClickOpen = () => {
        this.setState({ "openModal": true })
        this.removeEventListenerScroll()
    };

    handleClickOpenParticipants = () => {
        this.setState({ "openModalParticipants": true })
        this.removeEventListenerScroll()
    };

    handleClose = () => {
        this.setState({ "openModal": false })
        setTimeout(() => {
            document.body.style.overflowY = 'hidden'
        }, 100)
        this.addEventListenerScroll()
    };

    handleCloseParticipants = () => {
        this.setState({ "openModalParticipants": false })
        this.addEventListenerScroll()
    };

    removeEventListenerScroll = () => {
        document.documentElement.removeEventListener("mousewheel", this.scrollHorizontally, false);
        document.documentElement.removeEventListener("DOMMouseScroll", this.scrollHorizontally, false);
    }

    addEventListenerScroll = () => {
        document.documentElement.addEventListener("mousewheel", this.scrollHorizontally, false);
        document.documentElement.addEventListener("DOMMouseScroll", this.scrollHorizontally, false);
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
        this.setState({ openMenu: !this.state.openMenu })
    };

    handleCloseMenu = () => {
        this.setState({ loading: true })
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
                    //alert('alterado com sucesso!');
                });

            });
        }
    }

    handleEnter = (event) => {
        if (event.keyCode == 13) {
            if (this.state.membersearch) {
                this.setState({ loadingCandidatos: true })
                this._ss.search(this.state.membersearch).then(res => {
                    if (res.status === 201 || res.status === 200)
                        this.setState({ "candidatos": res.data.data });
                    else if (res.status === 204)
                        this.setState({ "candidatos204": true });

                    this.setState({ loadingCandidatos: false })
                })
            } else {
                this.setState({ "candidatos": [] });
            }
        }
    }

    handleDeleteConfirmation = () => [
        this.setState({ deleteConfirmation: true })
    ]

    handleCloseDeleteConfirmation = () => {
        this.setState({ deleteConfirmation: false })
    }

    handleSearch = (e) => {
        this.setState({ "membersearch": e.target.value })
        if (e.target.value.length === 0) this.setState({ "candidatos": [] });
        this.setState({ candidatos204: false })
    }

    handleInvite = (_id, name) => {

        let newState = Object.assign({}, this.state);
        newState.candidatos[newState.candidatos.map(i => { return i._id }).indexOf(_id)].is_invited = true;
        //newState.loading = true;
        this.setState(newState)

        this._ss.invite(this._queryString.get("ref"), _id).then(res => {
            this.setState({ loading: false })
            //alert(`${name} convidado(a) para memory line ${this.state.title}!`)
        })
    }

    handleDescription = (e) => {
        this.setState({ "description": e.target.value })
    }

    handleFile = async (e) => {
        let self = this;
        this.setState({ loading: true })
        const options = {
            maxSizeMB: 0.01,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        let compressedFile = await imageCompression(e[0], options);
        this.setState({ loading: false })

        this.setState({ 'file': e[0].size > compressedFile.size ? compressedFile : e[0] })

        var fr = new FileReader();
        fr.onload = function () {
            self.setState({ pic: this.result });
        }
        fr.readAsDataURL(this.state.file);
    }

    handleSubmit = (e) => {
        if (e) e.preventDefault()
        this.setState({ loading: true })
        this._fs.getPreSignedUrl(this.state.file, this._queryString.get("ref"), this.state.description).then(res => {
            if (res.data.success)
                this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
                    let newMoment = {
                        idMoment: res.data.data.moment_id,
                        urlBucket: this.state.pic,
                        description: this.state.description,
                        creationDate: new Date().toString(),
                        ownerName: BaseService.currentName,
                        ownerPicture: BaseService.currentUserPic,
                        commentsNumber: 0
                    }

                    let newState = Object.assign({}, this.state)
                    newState.moments.unshift(newMoment)
                    newState.openModal = false;
                    newState.loading = false;
                    this.setState(newState)

                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                })
        }).catch(err => {
            alert("Ocorreu um erro inesperado")
            this.setState({ loading: false })
        });
    }

    desktopHeader() {
        const { classes } = this.props

        let participantsRow = [];
        for (let i = 0; i < 4 && this.state.members[i] != null; i++) {
            if (i == Math.min(3, this.state.members.length - 1)) {
                participantsRow.push(
                    <>
                        <img alt=''
                            data-tip={this.state.members.length > 4 ? "" : this.state.members[i].name}
                            src={this.state.members[i].profileImage}
                            className={this.state.members.length > 4 ? classes.lastMemberIcon : classes.membersIcons}
                            onClick={this.handleClickOpenParticipants}
                        />
                        {this.state.members.length > 4 && <div className={classes.plusicon} onClick={this.handleClickOpenParticipants}><MoreVert /></div>}
                        <ReactTooltip place="bottom" type="success" effect="solid" />
                    </>
                );
                break;
            }
            participantsRow.push(<img alt='' data-tip={this.state.members[i].name} src={this.state.members[i].profileImage} className={classes.membersIcons} />)
        }

        return (
            <>
                <Grid container className={classes.grid}>
                    <Grid className={classes.titleContainer} item md={5} sm={12}>
                        <Typography className={classes.title}>
                            <Link className={classes.link} to='/userhome'><NavigateBefore className={classes.back} /></Link>
                            <span className={classes.hideSpan} id="hide"></span><input readOnly maxLength="28" onInput={this.resize} id="txt" value={this.state.title} className={classes.titleIpt}></input>
                            {this.state.isOwner && <Brush onClick={this.handleEdit} className={classes.editIcon} id="edit-icon" />}
                        </Typography>
                    </Grid>
                    <Grid alignItems='right' alignContent='right' item md={7} sm={12}>
                        <Grid item className={classes.membros}>
                            {
                                !this.state.loadingMembers && this.state.type !== 'private' &&
                                <>
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
                                    {
                                        this.state.loadingCandidatos ?
                                            <ul className={classes.candidatos}>
                                                <li className={classes.candidato}>
                                                    <CircularProgress></CircularProgress>
                                                </li>
                                            </ul>
                                            :
                                            (this.state.candidatos204 ?
                                                <ul className={classes.candidatos}>
                                                    <li className={classes.candidato}>
                                                        Nenhum resultado encontrado.
                                            </li>
                                                </ul>
                                                : (
                                                    this.state.candidatos.length > 0 &&
                                                    <ul className={classes.candidatos}>
                                                        {
                                                            this.state.candidatos.map(item => (
                                                                <li key={item._id} className={classes.candidato}>
                                                                    <img className={classes.candidatoImg} src={item.picture}></img>
                                                                    <span>
                                                                        {`${item.first_name} ${item.last_name || ""}`}
                                                                    </span>
                                                                    <PersonAdd style={item.is_invited ? { color: 'green', marginLeft: 'auto' } : { color: 'black', marginLeft: 'auto' }} onClick={() => this.handleInvite(item._id, item.first_name)} />
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>)

                                            )
                                    }
                                    {
                                        participantsRow
                                    }
                                </>
                            }
                            <ClickAwayListener onClickAway={this.handleClickAway}>
                                <IconButton className={classes.options} aria-label="settings" onClick={this.handleClick}>
                                    <MoreVert />
                                    {this.state.openMenu &&
                                        <Paper className={classes.paper}>
                                            <MenuList>
                                                <MenuItem className={classes.apagar} onClick={this.handleDeleteConfirmation}><DeleteOutline style={{ marginRight: 5 }} /> Apagar MemoryLine</MenuItem>
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

        let participantsRow = [];
        for (let i = 0; i < 2 && this.state.members[i] != null; i++) {
            if (i == 0) {
                participantsRow.push(
                    <>
                        <img alt=''
                            data-tip={this.state.members.length > 4 ? "" : this.state.members[i].name}
                            src={this.state.members[i].profileImage}
                            className={this.state.members.length > 4 ? classes.lastMemberIconMob : classes.membersIconsMob}
                            onClick={this.handleClickOpenParticipants}
                        />
                        {this.state.members.length > 4 && <div className={classes.plusiconmob} style={this.state.openModal || this.state.openModalParticipants ? { right: "85px!important" } : {}} onClick={this.handleClickOpenParticipants}><MoreVert /></div>}
                        <ReactTooltip place="bottom" type="success" effect="solid" />
                    </>
                );
            } else {

                participantsRow.push(<img alt='' data-tip={this.state.members[i].name} src={this.state.members[i].profileImage} className={classes.membersIconsMob} />)
            }
        }

        return (
            <Grid container spacing={1} className={classes.gridMobile}>

                <div>

                    <Typography className={classes.titleMob}>
                        {this.state.title}
                    </Typography>
                </div>

                <div className={classes.membersDiv}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <IconButton className={classes.optionsMob} aria-label="settings" onClick={this.handleClick}>
                            <MoreVert />
                            {this.state.openMenu &&
                                <Paper className={classes.paper}>
                                    <MenuList>
                                        <MenuItem className={classes.apagar} onClick={this.handleDeleteConfirmation}><DeleteOutline style={{ marginRight: 5 }} /> Apagar MemoryLine</MenuItem>
                                    </MenuList>
                                </Paper>
                            }
                        </IconButton>
                    </ClickAwayListener>

                    {
                        participantsRow
                    }
                </div>

                {this.state.type !== 'private' &&

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
                        {
                            this.state.loadingCandidatos ?
                                <ul className={classes.candidatosMobile}>
                                    <li className={classes.candidato}>
                                        <CircularProgress></CircularProgress>
                                    </li>
                                </ul>
                                :
                                (this.state.candidatos204 ?
                                    <ul className={classes.candidatosMobile}>
                                        <li className={classes.candidato}>
                                            Nenhum resultado encontrado.
                                            </li>
                                    </ul>
                                    : (
                                        this.state.candidatos.length > 0 &&
                                        <ul className={classes.candidatosMobile}>
                                            {
                                                this.state.candidatos.map(item => (
                                                    <li key={item._id} className={classes.candidato}>
                                                        <img className={classes.candidatoImg} src={item.picture}></img>
                                                        <span>
                                                            {`${item.first_name} ${item.last_name || ""}`}
                                                        </span>
                                                        <PersonAdd style={item.is_invited ? { color: 'green', marginLeft: 'auto' } : { color: 'black', marginLeft: 'auto' }} onClick={() => this.handleInvite(item._id, item.first_name)} />
                                                    </li>
                                                ))
                                            }
                                        </ul>)

                                )
                        }
                    </Grid>

                }

            </Grid>
        )
    }

    render() {
        const { classes } = this.props

        document.title = this.state.title // passar o nome da memory line

        document.body.style.overflowX = this.state.ftLoadingMoments ? "hidden" : "visible";


        return (
            <div className={classes.root} id="root-memoryline">

                <LinearLoading style={this.state.loading || this.state.ftLoadingMoments ? { visibility: 'visible' } : { visibility: 'hidden' }} />
                {/* <NavBar /> */}

                {/* <div className={classes.bodyRoot}> */}
                {this.state.mobile ? this.mobileHeader() : this.desktopHeader()}
                {
                    this.state.ftLoadingMoments ?
                        <>
                            <LineLoading />
                        </>
                        :
                        this.state.moments.length > 0 ?
                            <Line handlerOpen={this.removeEventListenerScroll} handlerClose={this.addEventListenerScroll} data={this.state.moments} hasMore={this.state.hasMore} /> : this.state.mobile ? <Typography className={classes.notMobile}>Nenhum momento salvo.</Typography> : <Typography className={classes.not}>Nenhum momento salvo.</Typography>
                }

                <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleClickOpen} >
                    <AddAPhoto />
                </Fab>
                {/* </div> */}

                {/* MODAL ADD MOMENT */}
                <Dialog open={this.state.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>Adicione um momento!</DialogTitle>
                    <DialogContent>
                        {/* <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            // multiple
                            type="file"
                            onChange={this.handleFile}
                            
                        /> */}
                        {
                            !this.state.pic ?

                                <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()} style={{ height: 300, display: "flex", alignItems: "center", textAlign: "center", wordBreak: "break-word", border: "1px dashed black", cursor: "pointer", padding: 40 }}>
                                                <input {...getInputProps()} />
                                                <p style={{ textAlign: "center" }}>
                                                    {!this.state.loading ?
                                                        "Arraste uma imagem, ou clique para selecionar um arquivo do seu dispositivo!" :
                                                        <span>
                                                            <CircularProgress style={{ marginLeft: "45px" }} />
                                                        </span>
                                                    }
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                :
                                <>
                                    <Typography>Preview:</Typography>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={this.state.pic} style={{ maxHeight: 300, maxWidth: "100%", objectFit: "cover" }}></img>
                                    </div>
                                    <TextField
                                        onChange={this.handleDescription}
                                        label="Descreva esse momento!"
                                        className={classes.input}
                                        style={{ margin: "15px 0" }}
                                        fullWidth
                                    />
                                </>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                </Button>
                        <Button onClick={this.handleSubmit} disabled={!this.state.pic || this.state.loading} color="primary">
                            ADICIONAR
                </Button>
                    </DialogActions>
                </Dialog>


                <Dialog maxWidth={"xs"} open={this.state.openModalParticipants} onClose={this.handleCloseParticipants} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>Participantes</DialogTitle>
                    <DialogContent>
                        {
                            this.state.members.map(item => (
                                <div className={classes.membersModal}>
                                    <img className={classes.membersIconModal} src={item.profileImage}></img>
                                    <p className={classes.memberName}>{item.name}</p>
                                </div>
                            ))
                        }
                    </DialogContent>
                </Dialog>

                {this.state.deleteConfirmation && <Confirmation handler={this.handleCloseMenu} handleClose={this.handleCloseDeleteConfirmation}></Confirmation>}
            </div>
        )
    }
}

export default compose(withRouter, withStyles(styles))(MemoryLine)