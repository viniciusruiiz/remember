import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/styles';
import { Controller, Scene } from 'react-scrollmagic';
import Line from '../../components/memoryLine/line';
import Moment from '../../components/moment/moment';
import FileService from '../../service/fileService';
import MomentService from '../../service/momentService';

class MemoryLine extends Component {
    
    _fs = new FileService();
    _ms = new MomentService();
    //_mls = new MemoryLineService();
    
    constructor(props) {
        super(props)
        this.state = {
            moments: [],
            string: ''
        }

        this._ms.getAllMoments().then(res => {
            this.setState({moments:res.data.data});
        })
    }

    // handleFile = (e) => {
    //     this.setState({'file':e.target.files[0]})
    //     console.log(e.target.files[0]);
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     this._fs.getPreSignedUrl(this.state.file).then(res => {
    //         if(res.data.success)
    //            this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
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
                { this.state.moments.length > 0  && <Line data={this.state.moments} /> }
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)