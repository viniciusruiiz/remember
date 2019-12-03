import React, { Component } from 'react';
import styles from './confirmationStyles'
import { withStyles, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

class Confirmation extends Component {
    render() {
        return (
            <Dialog
                open={true}
                keepMounted
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Tem certeza que deseja continuar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {this.props.desc || "Essa ação é irreversível"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button onClick={this.props.handler} style={{ color: 'red' }}>
                        Continuar
          </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(Confirmation);