import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/styles';
import { Controller, Scene } from 'react-scrollmagic';
import Line from '../../components/memoryLine/line';
import Moment from '../../components/moment/moment';

class MemoryLine extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classes } = this.props
        document.body.style.height = '100vh'
        document.body.style.paddingTop = 56
        document.body.style.overflowY = 'hidden'

        document.title = 'Line Title' // passar o nome da memory line

        return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Line data={['a','b','a','b']} />
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)