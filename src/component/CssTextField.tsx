import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from 'react';

const cssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#38B49D',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#38B49D',
      },
    },
  })(TextField);

export default class CssTextField extends Component {
    render() {
        return (<CssTextField />)
    }
}