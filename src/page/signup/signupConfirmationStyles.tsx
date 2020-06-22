import { Theme, createStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const styles = (theme: Theme) => createStyles({
    fullHeight: {
        height: "99vh",
    },
    inside: {
        maxWidth: theme.spacing(50),
    },
    logoIcon: {
        height: theme.spacing(12),
        marginRight: theme.spacing(2),
        verticalAlign: "middle",
        paddingBottom: "20px",
    },
    text: {
        marginBottom: theme.spacing(6),
        textAlign: 'center',
    },
    loginButton: {
        color: "white",
        fontWeight: 400,
        padding: theme.spacing(1.3,0,1.3,0),
        borderRadius: 20,
        background: "#38B49D", 
        '&:hover': {
            backgroundColor: teal[500],
          },
    }
});

export default styles