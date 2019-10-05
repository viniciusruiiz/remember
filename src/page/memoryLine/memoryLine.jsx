import React, { Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import styles from './memoryLineStyles.jsx';
import { withStyles } from '@material-ui/styles';
import Line from '../../components/line/line';
import MomentService from '../../service/momentService';

class MemoryLine extends Component {
    
    _ms = new MomentService()
    _queryString;

    constructor(props) {
        super(props)
        this.state = {
            moments: []
        }

        console.log(this.props)
        console.log(this.props.location.search)
        this._queryString = new URLSearchParams(this.props.location.search)
        console.log(this._queryString.get("ref"))
        console.log(this._queryString.get("title"))
        
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
                <Line data={this.state.moments} />
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)