import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Icon, Paper, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Collapse, Button, Fab } from '@material-ui/core';
import NavBar from '../../components/navbar/navbar';
import styles from './userHomeStyles.jsx';
import { withStyles } from '@material-ui/styles';
import LineBox from '../../components/lineBox/lineBox';
import clsx from 'clsx';
import { ArrowDownwardRounded, ArrowDropDown, KeyboardArrowDownRounded, Add } from '@material-ui/icons';
import MemoryLineService from '../../service/memoryLineService';


class UserHome extends Component {

    _mls = new MemoryLineService();

    constructor(props) {
        super(props)
        this.state = {
            expanded1: true,
            expanded2: true,
            publicMemoryLines: [],
            privateMemoryLines: []
        }

        this._mls.getAllMemoryLine().then(res => {
            this.setState({publicMemoryLines:res.data.data.public});
            this.setState({privateMemoryLines:res.data.data.private});
        })
    }

    handleExpandClick1 = () => {
        this.setState({expanded1: !this.state.expanded1})
    }
    handleExpandClick2 = () => {
        this.setState({expanded2: !this.state.expanded2})
    }

    render() {
        const { classes } = this.props

        return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Button className={classes.btnExpand}>
                    <Typography onClick={this.handleExpandClick1} className={classes.hideCompartilhadas}>
                        Memorylines compartilhadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, {[classes.expandOpen]: this.state.expanded1})}/>
                    </Typography>
                </Button>
                <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
                    <Grid container spacing={4}>
                        {/* <LineBox title='HxHLine' lastChangeInTimestamp='1569726044000' notificationCount='3'/>
                        <LineBox title='Familia <3' lastChangeInTimestamp='1569685477000' notificationCount='1'/>
                        <LineBox title='Amigos!' lastChangeInTimestamp='1569638677000' notificationCount='0'/>
                        <LineBox /> */}
                        {
                            this.state.privateMemoryLines.map(line => (
                                <LineBox title='HxHLine' lastChangeInTimestamp='1569726044000' notificationCount='3'/> //TODO: linebox
                            ))
                        }
                    </Grid>
                </Collapse><br></br>
                <Button className={classes.btnExpand}>
                    <Typography onClick={this.handleExpandClick2} className={classes.hideCompartilhadas}>
                        Memorylines privadas <KeyboardArrowDownRounded className={clsx(classes.iconArrow, {[classes.expandOpen]: this.state.expanded2})}/>
                    </Typography>
                </Button>
                <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
                    <Grid container spacing={4}>
                        {
                            this.state.privateMemoryLines.map(line => (
                                <LineBox title={line.name} lastChangeInTimestamp='1569726044000' notificationCount='3'/> //TODO: linebox
                            ))
                        }
                    </Grid>
                </Collapse>

                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <Add />
                </Fab>
            </div>
        </>
        )
    }
}

export default withStyles(styles)(UserHome)