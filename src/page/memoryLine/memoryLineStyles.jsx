import { createStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        color: 'white',
        height: '100%',
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