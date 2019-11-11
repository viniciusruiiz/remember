import { createStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        marginTop: 30,
        color: 'rgba(0,0,0,0.8)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    hideCompartilhadas: {
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 20,
        marginTop: 20,
    },
    iconArrow: {
        verticalAlign: "middle",
        marginLeft: 8,
        transition: '0.1s',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    btnExpand: {
        color: 'white',
        textTransform: 'none',
        padding: 0,
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
});

export default styles