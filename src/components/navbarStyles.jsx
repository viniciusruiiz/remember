import { createStyles } from "@material-ui/core";

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
    user: {
    }
});

export default styles