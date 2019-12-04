import React, { Component } from 'react';
import { Grid, Button, Fab, Container, TextField, Select, Dialog, DialogTitle, DialogContent, MenuItem, DialogActions, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import NavBar from '../../components/navbar/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';
import LineBox from '../../components/lineBox/lineBox';
import clsx from 'clsx';
import { ArrowDownwardRounded, ArrowDropDown, KeyboardArrowDownRounded, Add, LockOpenOutlined, LockOutlined, Group, Person } from '@material-ui/icons';
import MemoryLineService from '../../service/memoryLineService';
import LinearLoading from '../../components/linearLoading/linearLoading';
import LineBoxLoading from '../../components/lineBoxLoading/lineBoxLoading';
import BaseService from '../../service/baseService';


class UserHome extends Component {

    _mls = new MemoryLineService();

    constructor(props) {
        super(props)
        this.state = {
            expanded1: true,
            expanded2: true,
            publicMemoryLines: [],
            privateMemoryLines: [],
            loadingPublics: true,
            loadingPrivates: false,
            showPublics: true,
            curPagePublic: 1,
            curPagePrivate: 1,
            hasNextPublic: false,
            hasNextPrivate: false,
            firstTimePrivates: true,
            openModal: false,
            selected: "public",
            memoryLineNameIpt: '',
            loadingCreation: false,
            newMemoryLineIds: [],
            disable: false,
            linearLoading: false
        }

        this.getAllPublics();

        function scroll() {

            let windowHeight = this.getDocHeight();

            if ((window.innerHeight + window.pageYOffset + 250) >= windowHeight) {
                if (!this.state.loadingPrivates && !this.state.loadingPublics) {
                    if (this.state.showPublics && this.state.hasNextPublic) {
                        this.getAllPublics();
                    } else if (!this.state.showPublics && this.state.hasNextPrivate) {
                        this.getAllPrivates();
                    }
                }
            }
        }

        scroll = scroll.bind(this);

        onscroll = scroll;

        BaseService.getNotifications();
    }

    // componentWillUnmount() {
    //     onscroll = null;
    // }

    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    getAllPublics = () => {
        this.setState({ loadingPublics: true })
        let page = this.state.curPagePublic;
        this._mls.getAllPublics(page).then(res => {
            this.setState({ curPagePublic: page + 1 });

            let newState = Object.assign({}, this.state);
            let ids = res.data.data.memoryLine.map(item => {
                return item.idMemoryLine
            });

            this.state.newMemoryLineIds.forEach(item => {
                if (res.data.data.memoryLine.some(e => e.idMemoryLine === item)) {
                    res.data.data.memoryLine.splice(ids.indexOf(item), 1);
                }
            })

            newState.publicMemoryLines.push(...res.data.data.memoryLine);
            newState.hasNextPublic = res.data.data.hasNextPage;
            newState.loadingPublics = false;
            this.setState(newState);

        })//make error
    }

    getAllPrivates = () => {
        this.setState({ loadingPrivates: true })
        let page = this.state.curPagePrivate;
        this._mls.getAllPrivates(page).then(res => {
            this.setState({ curPagePrivate: page + 1 });

            let newState = Object.assign({}, this.state);
            let ids = res.data.data.memoryLine.map(item => {
                return item.idMemoryLine
            });

            this.state.newMemoryLineIds.forEach(item => {
                if (res.data.data.memoryLine.some(e => e.idMemoryLine === item)) {
                    res.data.data.memoryLine.splice(ids.indexOf(item), 1);
                }
            })

            newState.privateMemoryLines.push(...res.data.data.memoryLine);
            newState.hasNextPrivate = res.data.data.hasNextPage;
            newState.loadingPrivates = false;
            this.setState(newState);

        })//make error
    }

    handleShowPublic = () => {
        this.setState({ showPublics: true })
    }

    handleShowPrivate = () => {
        this.setState({ showPublics: false })
        if (this.state.firstTimePrivates) this.getAllPrivates()
        this.setState({ firstTimePrivates: false })
    }

    handleMemoryLineNameIpt = (e) => {
        this.setState({ memoryLineNameIpt: e.target.value });
    }

    handleSubmit = (e) => {
        if (e.preventDefault)
            e.preventDefault();

        let body = {
            "name": this.state.memoryLineNameIpt,
            "type": this.state.selected
        }

        this.setState({ disable: true, linearLoading: true })

        this._mls.add(body).then(res => {
            res.data.data.isNew = true;
            let newState = Object.assign({}, this.state)
            if (body.type === "private") {
                newState.privateMemoryLines.unshift(res.data.data);
            }
            else {
                newState.publicMemoryLines.unshift(res.data.data);
            }
            newState.newMemoryLineIds.push(res.data.data.idMemoryLine);
            newState.openModal = false;
            newState.disable = false;
            newState.linearLoading = false;
            this.setState(newState);

            if (body.type === "private") {
                this.handleShowPrivate();
            } else {
                this.handleShowPublic();
            }

            window.scrollTo({ top: 0, behavior: "smooth" })
        })
    }

    handleClickOpen = () => {
        this.setState({ "openModal": true })
    }

    handleClose = () => {
        this.setState({ "openModal": false })
    }

    handleChange = (e) => {
        this.setState({ selected: e.target.value })
    }

    render() {
        const { classes } = this.props

        document.title = 'Remember'

        return (
            <>
                <div className={classes.root}>
                    {/* <NavBar /> */}
                    {this.state.linearLoading && <LinearLoading />}

                    <div className={classes.headerChange}>
                        <div className={`${classes.divChange} ${this.state.showPublics ? classes.selected : 'notSelected'}`} onClick={this.handleShowPublic}>
                            <Group className={classes.iconChange} />
                            {/* <span>Públicas</span> */}
                        </div>
                        <div className={`${classes.divChange} ${!this.state.showPublics ? classes.selected : 'notSelected'}`} onClick={this.handleShowPrivate}>
                            <Person className={classes.iconChange} />
                            {/* <span>Privadas</span> */}
                        </div>
                    </div>

                    <Container>

                        <div className={classes.bodyRoot}>
                            <Grid container spacing={4}>

                                {/* <Button onClick={this.handleExpandClick1} className={classes.btnExpand}>
                            <Typography className={classes.hideCompartilhadas}>
                                Memorylines compartilhadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, { [classes.expandOpen]: this.state.expanded1 })} />
                            </Typography>
                        </Button> */}
                                {/* <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit> */}
                                {
                                    this.state.showPublics &&
                                    <>
                                        <>
                                            {
                                                this.state.publicMemoryLines.map(item => (
                                                    <LineBox lastChangeInTimestamp={item.lastTimestamp} isNew={item.isNew} title={item.name} urlMoments={item.urlMoments} participants={item.urlParticipants} hasMoreParticipants={item.quantityParticipants > 2} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                                ))
                                            }
                                        </>
                                        {
                                            this.state.hasNextPublic &&
                                            <>
                                                <LineBoxLoading />
                                                <LineBoxLoading />
                                                <LineBoxLoading />
                                            </>
                                        }
                                    </>
                                }
                                {/* </Collapse> */}
                                {/* <Button onClick={this.handleExpandClick2} className={classes.btnExpand}>
                            <Typography className={classes.hidePrivadas}>
                                Memorylines privadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, { [classes.expandOpen]: this.state.expanded2 })} />
                            </Typography>
                        </Button> */}
                                {/* <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit> */}
                                {
                                    !this.state.showPublics &&
                                    <>

                                        {
                                            this.state.privateMemoryLines.map(item => (
                                                <LineBox lastChangeInTimestamp={item.lastTimestamp} isNew={item.isNew} title={item.name} urlMoments={item.urlMoments} participants={[]} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                            ))
                                        }

                                        {
                                            this.state.hasNextPrivate &&
                                            <>
                                                <LineBoxLoading />
                                                <LineBoxLoading />
                                                <LineBoxLoading />
                                            </>
                                        }
                                    </>
                                }
                                {/* </Collapse> */}
                                {
                                    this.state.loadingPublics && this.state.publicMemoryLines.length === 0 ?
                                        <>
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                        </>
                                        :
                                        this.state.loadingPrivates && this.state.privateMemoryLines.length === 0 &&
                                        <>
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                            <LineBoxLoading />
                                        </>

                                }
                            </Grid>

                            <Fab id="button_new" color="primary" aria-label="add" className={classes.fab} onClick={this.handleClickOpen}>
                                <Add />
                            </Fab>
                        </div>
                    </Container>
                </div>

                <Dialog open={this.state.openModal} onClose={this.handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth="xs">
                    <DialogTitle id="form-dialog-title">Criar memory line</DialogTitle>
                    <DialogContent>
                        <FormControl style={{ margin: "0 0 10px 0", width: "100%" }} className={classes.input}>
                            <TextField label="Nome da MemoryLine" onChange={this.handleMemoryLineNameIpt} />
                        </FormControl>
                        <br />
                        <FormControl style={{ margin: "22px 0", width: "100%" }} className={classes.input}>
                            <InputLabel id="demo-simple-select-helper-label" onChange={this.handleMemoryLineNameIpt}>Privacidade</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                className={classes.input}
                                value={this.state.selected}
                                onChange={this.handleChange}
                                style={{ width: "100%" }}
                            >
                                <MenuItem value={"public"}><Group /> Compartilhada</MenuItem>
                                <MenuItem value={"private"}><Person /> Privada</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} disabled={this.state.disable} color="primary">
                            Cancelar
                </Button>
                        <Button onClick={this.handleSubmit} disabled={this.state.disable} color="primary">
                            Criar
                </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}

export default withStyles(styles)(UserHome)