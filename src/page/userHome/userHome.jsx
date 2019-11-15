import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon, Paper, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Collapse, Button, Fab, Container } from '@material-ui/core';
import NavBar from '../../components/navbar/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';
import LineBox from '../../components/lineBox/lineBox';
import clsx from 'clsx';
import { ArrowDownwardRounded, ArrowDropDown, KeyboardArrowDownRounded, Add } from '@material-ui/icons';
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
        }

        this._mls.getAllMemoryLine().then(res => {
            console.log(res.data.data)
            this.setState({ publicMemoryLines: res.data.data.public, loading: false })
            this.setState({ privateMemoryLines: res.data.data.private })
        })

        console.log(this.state)
    }

    handleExpandClick1 = () => {
        this.setState({ expanded1: !this.state.expanded1 })
    }
    handleExpandClick2 = () => {
        this.setState({ expanded2: !this.state.expanded2 })
    }
    handleAdd = (e) => {
        if (e.preventDefault)
            e.preventDefault();

        this._mls.add().then(res => {
            console.log("Adicionado!")
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
                <NavBar />
                <LinearLoading style={ this.state.loading ? {visibility: 'visible'} : {visibility: 'hidden'} } />                
                <Container>
                    <div className={classes.bodyRoot}>
                        <Button onClick={this.handleExpandClick1} className={classes.btnExpand}>
                            <Typography className={classes.hideCompartilhadas}>
                                Memorylines compartilhadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, { [classes.expandOpen]: this.state.expanded1 })} />
                            </Typography>
                        </Button>
                        <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
                            <Grid container spacing={4}>
                                {
                                    this.state.publicMemoryLines.map(item => (
                                        <LineBox title={item.name} urlMoments={item.urlMoments} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                    ))
                                }
                            </Grid>
                        </Collapse><br></br>
                        <Button onClick={this.handleExpandClick2} className={classes.btnExpand}>
                            <Typography className={classes.hidePrivadas}>
                                Memorylines privadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, { [classes.expandOpen]: this.state.expanded2 })} />
                            </Typography>
                        </Button>
                        <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                            <Grid container spacing={4}>
                                {
                                    this.state.privateMemoryLines.map(item => (
                                        <LineBox title={item.name} urlMoments={item.urlMoments} key={item.idMemoryLine} reference={item.idMemoryLine} id={item.idMemoryLine} />
                                    ))
                                }
                            </Grid>
                        </Collapse>

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