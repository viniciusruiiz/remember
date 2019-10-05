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
                <Line data={[{urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'},
                                {urlBucket:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6edQdep0kijNWpPDL6Ki06BYNr4V1LJnD_QsBS7ij5v_EeAw_w'}]} />
            </div>
        </>
        )
    }
}

export default withStyles(styles)(MemoryLine)