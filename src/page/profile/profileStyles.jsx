import { createStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        paddingTop: 75,
        color: 'rgba(0,0,0,0.8)',
    },
    img: {
        borderRadius: "50%",
        width: theme.spacing(25),
        height: "auto",
        position: "relative",
        "&:hover": {
            opacity: 0.5
        },
        transition: "opacity .4s",
        cursor: "pointer",
    },
    divzinha: {
        backgroundColor: green[500],
        width: 75,
        height: 75,
        // top: 200,
        // left: 360,
        marginTop: -100,
        marginRight: 0,
        marginBottom: 100,
        marginLeft: 150,
        textAlign: "center",
        borderRadius: "50%",
        position: "absolute",
        cursor: "pointer",
    },
    ipt: {
        width: "100%",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
});

export default styles;