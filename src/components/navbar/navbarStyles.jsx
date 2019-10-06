import { createStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    bar: {
        background: "white",
        color: "black",
    },
    perfil: {
        height: theme.spacing(4),
        margin: theme.spacing(1,1,1,2),
        borderRadius: 50,
    },
    logoIcon: {
        height: theme.spacing(5),
        margin: theme.spacing(1,1,1,0),
    },
    logoText: {
        fontFamily: 'Major Mono Display',
        fontSize: 20,
        lineHeight: "100%",
        flexGrow: 1,
    },
    paper: {
        zIndex: 2,
        position: 'absolute',
        top: 56,
        width: 200,
        right: 0,
        left: 0,
    },
    button: {
        padding: theme.spacing(0,1,0,2),
        height: 56,
        textTransform: 'none',
    },
});

export default styles