import { createStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        color: 'white',
        height: '100%',
        marginTop: 20,
        display: 'inline-block',
    },
    fab: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        background: green[500],
        '&:hover': {
            background: green[600],  
          },
          '&:active': {
            background: green[500],  
          },
          '&:focus': {
            background: green[500],              
          },
    },
    back: {
      marginRight: theme.spacing(2),
      verticalAlign: 'middle',
      marginBottom: 5,
    },
    title: {
      zIndex: '10',
      position: 'fixed',
      top: 76,
      left: 25,
      fontSize: 26,
      fontWeight: '100',
      whiteSpace: 'pre-wrap',
    },
});

export default styles