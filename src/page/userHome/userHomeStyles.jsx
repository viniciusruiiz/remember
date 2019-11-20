import { createStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        paddingTop: 49,
    },
    bodyRoot: {
        color: 'rgba(0,0,0,0.8)',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerChange: {
        height: '100%',
        width: '90%',
        marginLeft: '5%',
        //display: 'inline-block',
        borderBottom: '1px solid rgba(0,0,0,0.3)',
        textAlign: "center",
        padding: 0,
        margin: '0 0 20px 0',
      },
      divChangePub: {
        width: '49%',
        display: 'inline-block',
        padding: 0,
        height: '100%',
        borderRight: '1px solid rgba(0,0,0,0.3)',
        padding: '0',
        margin: '0 0 0 0',
        '&:hover': {
            backgroundColor: grey[300],
            cursor: "pointer",
        }
      },
      divChangePriv: {
        width: '49%',
        display: 'inline-block',
        margin: 0,
        padding: 0,
        height: '100%',
        '&:hover': {
            backgroundColor: grey[300],
            cursor: "pointer",
        }
      },
      iconChange: {
        fontSize: 16,
        textAlign: 'center',
        margin: 0,
        // paddingBottom: 5
      },
      selected: {
        backgroundColor: green[200],
      },
    hideCompartilhadas: {
        color: 'rgba(0,0,0,0.8)',
        marginTop: 15,
        marginBottom: 20,
    },
    hidePrivadas: {
        color: 'rgba(0,0,0,0.8)',
        marginBottom: 20,
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