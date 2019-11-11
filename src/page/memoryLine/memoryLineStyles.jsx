import { createStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        color: 'black',
        height: '100%',
        display: 'inline-block',
    },
    link: {
      color: 'black',
    },
    hideSpan: {
      margin: 0,
      padding: 0,
      position: "absolute",
      height: 0,
      overflow: "hidden",
      whiteSpace: "pre",
    },
    editIcon: {
      cursor: "pointer",
      visibility: "hidden",
      transition: "opacity 0.2s ease",
      opacity: 0
    },
    titleIpt: {
        border: "none",
        display: "inline",
        color: "inherit",
        font: "inherit",
        padding: "none",
        width: "auto",
        minWidth: "20px",
        backgroundColor: "inherit",
        margin: "0 5px 0 0",
        '&:focus + #edit-icon': {
          visibility: "visible",
          opacity: 1
        },
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
      fontSize: 26,
      fontWeight: '300',
      whiteSpace: 'pre-wrap',
      '&:hover #edit-icon': {
        visibility: "visible",
        opacity: 1
      },
      transition: "opacity 0.2s ease",
    },
    titleContainer: {
      zIndex: '10',
    },
    grid: {
      width: '96%',
      position: 'fixed',
      margin: theme.spacing(8,3,0,3),
    },
    gridMobile: {
      width: '93%',
      margin: theme.spacing(8,3,0,3),
    },
    adicionar: {
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: green[300],
      },
      marginRight: theme.spacing(2),
    },
    adicionarInput: {
      color: 'red',
    },
    membersIcons: {
      marginTop: 11,
      width: 35,
      height: 35,
      borderRadius: '50%',
      top: 20,
      margin: theme.spacing(0,2,0,0),  
    },
    gridRight: {
      width: '100%',
    },
    membros: {
      float: 'right',
    },
    options: {
      marginBottom: 28,
      color: 'black',
    },
    paper: {
      zIndex: 7,
      position: 'absolute',
      top: 56,
      width: 200,
      right: 0,
  },
});

export default styles