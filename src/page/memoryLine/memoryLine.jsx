import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/core/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';
import { Fab, Typography } from '@material-ui/core';
import { Add, NavigateBefore } from '@material-ui/icons';

class MemoryLine extends Component {
    
    _ms = new MomentService()
    _queryString;

    constructor(props) {
        super(props)
        this.state = {
            moments: []
        }

        this._queryString = new URLSearchParams(this.props.location.search)
        
        this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
            this.setState({"moments": res.data.data})
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
        document.body.style.paddingRight = 200

        document.title = this._queryString.get("title") // passar o nome da memory line

        return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Typography className={classes.title}>
                    <NavigateBefore className={classes.back}/> 
                    { this._queryString.get("title") || 'Memoryline Title' }
                </Typography>
                <Line data={this.state.moments} />
                <Fab color="primary" aria-label="add" className={classes.fab} >
                    <Add />
                </Fab>
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)