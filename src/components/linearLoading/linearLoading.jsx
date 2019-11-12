import React, { Component } from 'react';
import { lighten } from '@material-ui/core/styles/colorManipulator'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';

const BorderLinearProgress = withStyles({
    root: {
      height:3,
      backgroundColor: lighten('#38B49D',0.6),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#38B49D',
    },
  })(LinearProgress);

  class LinearLoading extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hidden : this.props.hidden
      }
    }

    render() {
    return (
        <BorderLinearProgress style={this.props.style} hidden={this.props.hidden}/>
    );
    }
  }
  
  export default LinearLoading;