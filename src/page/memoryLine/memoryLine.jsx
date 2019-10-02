import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/styles';


class MemoryLine extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { classes } = this.props

        return (
        <>
            <NavBar />
            <div className={classes.root}>
                memo hehehe
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)