import { createStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        color: 'white',
        height: '100%',
        marginTop: '6%',
        display: 'inline-block',
        paddingRight: 200,
    },
    link: {
      color: 'white',
    },
    fab: {
        zIndex: 3,
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
      top: 68,
      left: 80,
      fontSize: 26,
      fontWeight: '100',
      whiteSpace: 'pre-wrap',
    },
    membros: {
      position: 'fixed',
      right: 80,
      top: 68,
    },
    adicionar: {
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: green[300],
      },
      marginRight: theme.spacing(2),
    },
    adicionarInput: {
      color: 'white',
    },
    membersIcons: {
      marginTop: 11,
      width: 35,
      height: 35,
      borderRadius: '50%',
      top: 20,
      margin: theme.spacing(0,2,0,0),  
    },
    options: {
      marginBottom: 28,
      color: grey[100],
    },
});

export default styles