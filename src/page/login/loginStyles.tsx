import { Theme, createStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { lighten } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    fullHeight: {
        height: "99vh",
    },
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: theme.spacing(50),
        borderRadius: 20
    },
    logoIcon: {
        height: theme.spacing(12),
        marginRight: theme.spacing(2),
        verticalAlign: "middle",
        paddingBottom: "20px",
    },
    logoText: {
        fontFamily: 'Major Mono Display',
        fontSize: 40,
        lineHeight: "100%",
    },
    inputLogin: {
        '& label.Mui-focused': {
            color: '#38B49D',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#38B49D',
        },
        margin: theme.spacing(1,6,3,6),
    },
    inputSenha: {
        '& label.Mui-focused': {
            color: '#38B49D',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#38B49D',
        },
        margin: theme.spacing(0,6,6,6),
    },
    loginButton: {
        color: "white",
        fontWeight: 400,
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
    error: {
        marginTop: -27,
        marginBottom: 10,
        fontSize: 14,
        color: '#FA8072',
    }
});

export default styles