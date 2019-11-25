import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon, Paper, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Collapse, Button, Fab, Container } from '@material-ui/core';
import NavBar from '../../components/navbar/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';
import LineBox from '../../components/lineBox/lineBox';
import clsx from 'clsx';
import { ArrowDownwardRounded, ArrowDropDown, KeyboardArrowDownRounded, Add, LockOpenOutlined, LockOutlined } from '@material-ui/icons';
import MemoryLineService from '../../service/memoryLineService';
import LinearLoading from '../../components/linearLoading/linearLoading';


class UserHome extends Component {

    _mls = new MemoryLineService();

    constructor(props) {
        super(props)
        this.state = {
            expanded1: true,
            expanded2: true,
            publicMemoryLines: [],
            privateMemoryLines: [],
            loading: true,
            showPublics: true,
            curPagePublic: 1,
            curPagePrivate: 1,
            hasNextPublic: false,
            hasNextPrivate: false,
        }

        // this._mls.getAllMemoryLine().then(res => {
        //     this.setState({ publicMemoryLines: res.data.data.public, loading: false })
        //     this.setState({ privateMemoryLines: res.data.data.private })
        // })

        this.getAllPublics();
    }

    getAllPublics = () => {
        this.setState({loading:true})
        let page = this.state.curPagePublic;
        this._mls.getAllPublics(page).then(res => {
            console.log(res);
            this.setState({curPagePublic : page + 1});
            if(this.state.publicMemoryLines.length == 0)
                this.setState({ publicMemoryLines: res.data.data.memoryLine, hasNextPublic: res.data.data.hasNextPage, loading: false  })
            else {
                let newState = Object.assign({}, this.state);
                newState.publicMemoryLines.push(...res.data.data.memoryLine);
                newState.hasNextPublic = res.data.data.hasNextPage;
                newState.loading = false;
                this.setState(newState);
            }
        })
    }

    getAllPrivates = () => {
        this.setState({loading:true})
        let page = this.state.curPagePrivate;
        this._mls.getAllPrivates(page).then(res => {
            console.log(res);
            this.setState({curPagePrivate : page + 1});
            if(this.state.privateMemoryLines.length == 0)
                this.setState({ privateMemoryLines: res.data.data.memoryLine, hasNextPrivate: res.data.data.hasNextPage, loading: false  })
            else {
                let newState = Object.assign({}, this.state);
                newState.privateMemoryLines.push(...res.data.data.memoryLine);
                newState.hasNextPrivate = res.data.data.hasNextPage;
                newState.loading = false;
                this.setState(newState); 
            }
        })
    }

    // handleExpandClick1 = () => {
    //     this.setState({ expanded1: !this.state.expanded1 })
    // }
    // handleExpandClick2 = () => {
    //     this.setState({ expanded2: !this.state.expanded2 })
    // }


    handleShowPublic = () => {
        this.setState({ showPublics: true })
        if(this.state.publicMemoryLines.length == 0) this.getAllPublics()
    }

    handleShowPrivate = () => {
        this.setState({ showPublics: false })
        if(this.state.privateMemoryLines.length == 0) this.getAllPrivates()
    }

    handleAdd = (e) => {
        if (e.preventDefault)
            e.preventDefault();

        this._mls.add().then(res => {
            let newState = Object.assign({}, this.state)
            newState.privateMemoryLines.push(res.data.data);
            this.setState(newState);
        })
    }

    render() {
        const { classes } = this.props

        document.title = 'Remember'

        return (
            <div className={classes.root}>
                {/* <NavBar /> */}
                <LinearLoading style={ this.state.loading ? {visibility: 'visible'} : {visibility: 'hidden'} } />                
                
                <div className={classes.headerChange}>
                    <div className={`${classes.divChange} ${this.state.showPublics ? classes.selected : 'notSelected'}`} onClick={this.handleShowPublic}>
                        <LockOpenOutlined className={classes.iconChange}/>
                        {/* <span>Públicas</span> */}
                    </div>
                    <div className={`${classes.divChange} ${!this.state.showPublics ? classes.selected : 'notSelected'}`} onClick={this.handleShowPrivate}>
                        <LockOutlined className={classes.iconChange}/>
                        {/* <span>Privadas</span> */}
                    </div>
                </div>
                
                <Container>
                    <br></br>
                    <div className={classes.bodyRoot}>
                        {/* <Button onClick={this.handleExpandClick1} className={classes.btnExpand}>
                            <Typography className={classes.hideCompartilhadas}>
                                Memorylines compartilhadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, { [classes.expandOpen]: this.state.expanded1 })} />
                            </Typography>
                        </Button> */}
                        {/* <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit> */}
                        {
                            this.state.showPublics &&
                            <>
                            <Grid container spacing={4}>
                                {
                                    this.state.publicMemoryLines.map(item => (
                                        <LineBox title={item.name} urlMoments={item.urlMoments} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                    ))
                                }
                            </Grid>
                            {
                                this.state.hasNextPublic && <Button onClick={this.getAllPublics}>Mais</Button>
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
                            <Grid container spacing={4}>
                                {
                                    this.state.privateMemoryLines.map(item => (
                                        <LineBox title={item.name} urlMoments={item.urlMoments} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                    ))
                                }
                            </Grid>
                            {
                                this.state.hasNextPrivate && <Button onClick={this.getAllPrivates}>Mais</Button>
                            }
                            </>
                        }
                        {/* </Collapse> */}

                        <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleAdd}>
                            <Add />
                        </Fab>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(UserHome)