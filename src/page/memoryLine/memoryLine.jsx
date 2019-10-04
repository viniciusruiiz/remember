import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/styles';
import Line from '../../components/line/line';
import perfil from './../../images/perfil.jpg';

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
        document.body.style.paddingRight = 200

        document.title = 'Line Title' // passar o nome da memory line

        return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Line data={[{urlBucket:'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/rikka-takanashi--8.05.jpg'},'b','a','b','a','b','a','b']} />
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)