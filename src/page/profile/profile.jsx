import React, { Component } from 'react';
import perfil from '../../images/perfil.jpg'
import styles from './profileStyles'
import { withStyles, Grid, Button, Paper, Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import BaseService from '../../service/baseService';
import ProfileService from '../../service/profileService';
import LinearLoading from '../../components/linearLoading/linearLoading';
import { EditOutlined } from '@material-ui/icons';

class Profile extends Component {

    _ps = new ProfileService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            username: BaseService.currentUsername,
            fname: BaseService.currentFName,
            lname: BaseService.currentLName,
            pic: BaseService.currentUserPic || perfil,
            disableSubmit: true,
        }

        if (!BaseService.currentUsername) {
            this.setState({ loading: true });
            this._ps.getProfile().then(res => {
                this.setState({
                    fname: res.data.data.first_name,
                    lname: res.data.data.last_name,
                    username: res.data.data.username,
                    //pic: res.data.data.picture,
                    loading: false
                })
            })
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <>
                <LinearLoading style={this.state.loading ? { visibility: 'visible' } : { visibility: 'hidden' }} />
                <Grid container justify="center" className={classes.root}>
                    <Grid item xs={8}>
                        <label for="file-input">
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
                        <input type="file" id="file-input" style={{ display: "none" }}></input>
                        {/* <Button disable={this.state.disableSubmit}>Submit</Button> */}
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(Profile);