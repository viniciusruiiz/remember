import { Theme, createStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const styles = (theme: Theme) => createStyles({
    fullHeight: {
        height: "100vh",
    },
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: theme.spacing(50),
        borderRadius: 20
    },
    logoIcon: {
        height: theme.spacing(12),
        marginRight: theme.spacing(2),
    },
    logoText: {
        height: theme.spacing(5),
        marginTop: theme.spacing(3.3),
    },
    inputLogin: {
        margin: theme.spacing(1,6,3,6),
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
});

export default styles