import React, { Component } from 'react';
import perfil from '../../images/perfil.jpg'
import styles from './profileStyles'
import { withStyles, Grid, Button, Paper, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import BaseService from '../../service/baseService';
import ProfileService from '../../service/profileService';
import LinearLoading from '../../components/linearLoading/linearLoading';
import { EditOutlined } from '@material-ui/icons';
import FileService from '../../service/fileService';
import imageCompression from 'browser-image-compression';

class Profile extends Component {

    _ps = new ProfileService();
    _fs = new FileService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            username: BaseService.currentUsername,
            fname: BaseService.currentFName,
            lname: BaseService.currentLName,
            pic: BaseService.currentUserPic,
            disableSubmit: true,
            file: '',
        }

        if (!BaseService.currentUsername) {
            this.setState({ loading: true });
            this._ps.getProfile().then(res => {
                this.setState({
                    fname: res.data.data.first_name,
                    lname: res.data.data.last_name,
                    username: res.data.data.username,
                    pic: res.data.data.picture,
                    loading: false
                })
            })
        }
    }

    handleFile = async (e) => {
        //this.setState({ loading: true })
        let file = e.target.files[0];
        let self = this;

        const options = {
            maxSizeMB: 0.5,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
        let compressedFile = await imageCompression(file, options);
        //this.setState({ loading: false })
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
        this.setState({ file: compressedFile })

        var fr = new FileReader();
        fr.onload = function () {
            self.setState({ pic: this.result, disableSubmit: false });
        }
        fr.readAsDataURL(file);
    }

    handleSubmit = (e) => {
        this.setState({ loading: true })
        this._fs.getPreSignedUrl(this.state.file).then(res => {
            if (res.data.success)
                this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
                    this.setState({ loading: false })

                    alert("coisado com sucesso");
                }).catch(err => { alert('erro no put:', err); this.setState({ loading: false }) })
        }).catch(err => { alert('erro na criacao da presigned url'); this.setState({ loading: false }) });

        // this._ms.getAllMoments(this._queryString.get("ref")).then(res => {
        //     this.setState({ "moments": res.data.data })
        // })
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <LinearLoading style={this.state.loading ? { visibility: 'visible' } : { visibility: 'hidden' }} />
                <Grid container justify="center" className={classes.root}>
                    <Grid item xs={8}>
                        <label htmlFor="file-input">
                            <img className={classes.img} src={this.state.pic}></img>
                            <div className={classes.divzinha}>
                                <EditOutlined style={{ marginTop: 25, color: "white" }}>Edit</EditOutlined>
                            </div>
                        </label>
                        <TextField
                            className={classes.ipt}
                            label="Username"
                            value={this.state.username}
                            disabled={this.state.loading}
                            defaultValue=" "
                        />
                        <TextField
                            className={classes.ipt}
                            label="Nome"
                            value={this.state.fname}
                            disabled={this.state.loading}
                            defaultValue=" "
                        />
                        <TextField
                            className={classes.ipt}
                            label="Sobrenome"
                            value={this.state.lname}
                            disabled={this.state.loading}
                            defaultValue=" "
                        />
                        <input type="file" id="file-input" style={{ display: "none" }} onChange={this.handleFile}></input>
                        <Button
                            fullWidth
                            disabled={this.state.disableSubmit || this.state.loading}
                            className={classes.btn}
                            id="submit"
                            color="primary"
                            variant="contained"
                            type="submit"
                            form="loginForm"
                            onClick={this.handleSubmit}
                        >
                            Alterar
                            </Button>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(Profile);