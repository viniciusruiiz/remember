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
import { Link } from 'react-router-dom';

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
            oldfname: BaseService.currentFName,
            oldlname: BaseService.currentLName,
            pic: BaseService.currentUserPic,
            disableSubmit: true,
            file: '',
            newPhoto: false,
            alterado: false,
        }

        if (!BaseService.currentUsername) {
            this.setState({ loading: true });
            this._ps.getProfile().then(res => {
                this.setState({
                    fname: res.data.data.first_name,
                    lname: res.data.data.last_name,
                    oldfname: res.data.data.first_name,
                    oldlname: res.data.data.last_name,
                    username: res.data.data.username,
                    pic: res.data.data.picture,
                    loading: false
                })
            })
        }
    }

    handleFName = (e) => {
        this.setState({ fname: e.target.value, disableSubmit: (this.state.fname === this.state.oldfname && this.state.lname === this.state.oldlname && !this.state.newPhoto) })
    }


    handleLName = (e) => {
        this.setState({ lname: e.target.value, disableSubmit: (this.state.fname === this.state.oldfname && this.state.lname === this.state.oldlname && !this.state.newPhoto) })
    }

    handleFile = async (e) => {
        this.setState({ loading: true })
        let file = e.target.files[0];
        let self = this;

        const options = {
            maxSizeMB: 0.01,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        let compressedFile = await imageCompression(file, options);
        //this.setState({ loading: false })

        this.setState({ 'file': file.size > compressedFile.size ? compressedFile : e[0] })

        this.setState({ file: compressedFile })

        var fr = new FileReader();
        fr.onload = function () {
            self.setState({ pic: this.result, newPhoto: true, disableSubmit: false, loading: false });
        }
        fr.readAsDataURL(file);
    }

    handleSubmit = (e) => {
        if (this.state.newPhoto) {
            this.setState({ loading: true })
            this._fs.getPreSignedUrl(this.state.file).then(res => {
                if (res.data.success)
                    this._fs.uploadFile(res.data.data.presigned_url, this.state.file, res.data.data.mime_type).then(uploadRes => {
                        this.setState({ loading: false, newPhoto: false, alterado: true, disableSubmit: true })
                        BaseService.updateProfile(this.state.pic)
                        BaseService.currentUserPic = this.state.pic;
                    }).catch(err => { alert('erro no put:', err); this.setState({ loading: false }) })
            }).catch(err => { alert('erro na criacao da presigned url'); this.setState({ loading: false }) });
        }

        if (this.state.fname !== this.state.oldfname || this.state.lname !== this.state.oldlname) {
            let data = {
                "first_name": this.state.fname,
                "last_name": this.state.lname
            }

            this._ps.updateProfile(data).then(res => {
                let alterado = this.state.alterado;
                let disableSubmit = this.state.disableSubmit;
                let loading = this.state.loading;
                this.setState({ alterado: this.state.newPhoto ? alterado : true, disableSubmit: this.state.newPhoto ? disableSubmit : true, loading: this.state.newPhoto ? loading : true, oldfname: this.state.fname, oldlname: this.state.lname })

                BaseService.updateProfileName(this.state.fname);
                BaseService.currentFName = this.state.fname;
                BaseService.currentLName = this.state.lname;
            })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <Grid container justify="center" className={classes.root}>
                    <LinearLoading hidden={!this.state.loading} style={{ width: '100%' }} />
                    <Grid item xs={8} style={{ paddingTop: 20 }}>
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
                            disabled={true}
                            defaultValue=" "
                        />
                        <TextField
                            className={classes.ipt}
                            label="Nome"
                            value={this.state.fname}
                            disabled={this.state.loading}
                            defaultValue=" "
                            onChange={this.handleFName}
                        />
                        <TextField
                            className={classes.ipt}
                            label="Sobrenome"
                            value={this.state.lname}
                            disabled={this.state.loading}
                            defaultValue=" "
                            onChange={this.handleLName}
                        />
                        <input type="file" id="file-input" style={{ display: "none" }} onChange={this.handleFile}></input>
                        {this.state.alterado && <div className={classes.success}>Alterado com sucesso!</div>}
                        {this.state.erro && <div className={classes.erro}>Ocorreu um erro inesperado. Tente novamente.</div>}
                        <Grid container style={{ marginBottom: 25 }}>
                            <Grid item xs={5}>
                                <Link to='/userhome' style={{ textDecoration: 'none' }}>
                                    <Button
                                        fullWidth
                                        className={classes.btn}
                                        id="submit"
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        form="loginForm"
                                    >
                                        Voltar
                            </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={5}>
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
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(Profile);