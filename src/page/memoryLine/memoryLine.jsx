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

    // handleFile = (e) => {
    //     this.setState({'file':e.target.files[0]})
    //     console.log(e.target.files[0]);
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     this._fs.getPreSignedUrl(this.state.file).then(res => {
    //         if(res.data.success)
    //            this._fs.uploadFile(res.data.data.presigned_url, this.state.file).then(uploadRes => {
    //                alert(res.data)
    //            }).catch(err => console.log('erro no put:', err))
    //     }).catch(err => console.log(err));
    // }

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