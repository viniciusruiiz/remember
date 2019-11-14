import { Theme, createStyles } from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";

const styles = (theme: Theme) => createStyles({
    fullHeight: {
        height: "100vh",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: theme.spacing(70),
        borderRadius: 20
    },
    inputLogin: {
        margin: theme.spacing(1,6,3,6),
    },
    inputEsquerda: {
      maxWidth: "40%",
      margin: theme.spacing(1,1,3,6),
    },
    inputDireita: {
      maxWidth: "40%",
      margin: theme.spacing(1,6,3,1),
    },
    inputSenha: {
        margin: theme.spacing(0,6,6,6),
    },
    loginButton: {
        color: "white",
        fontWeight: 100,
        padding: theme.spacing(1.3,0,1.3,0),
        margin: theme.spacing(0,5,3,5),
        borderRadius: 20,
        background: "#38B49D", 
        '&:hover': {
            backgroundColor: teal[500],
          },
    },
    link: {
      color: "#38B49D",
      textDecoration: "none",  
    },
    type: {
      fontSize: 15,  
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: grey[800],
      width: "100%",
      textAlign: "center"
    },
    error: {
        marginTop: -27,
        marginBottom: 10,
        fontSize: 14,
        color: '#FA8072',
    }
});

export default styles