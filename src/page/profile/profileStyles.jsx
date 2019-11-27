import { createStyles } from "@material-ui/core";
import { green, teal } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    root: {
        paddingTop: 75,
        color: 'rgba(0,0,0,0.8)',
    },
    img: {
        borderRadius: "50%",
        width: theme.spacing(25),
        height: theme.spacing(25),
        position: "relative",
        "&:hover": {
            opacity: 0.5
        },
        transition: "opacity .4s",
        cursor: "pointer",
        objectFit: 'cover',
    },
    divzinha: {
        backgroundColor: green[500],
        width: 75,
        height: 75,
        // top: 200,
        // left: 360,
        marginTop: -70,
        marginRight: 0,
        marginBottom: 100,
        marginLeft: 130,
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
    btn: {
        color: "white",
        fontWeight: 400,
        padding: theme.spacing(1.3, 0, 1.3, 0),
        margin: theme.spacing(3, 0, 0, 0),
        borderRadius: 20,
        background: "#38B49D",
        '&:hover': {
            backgroundColor: teal[500],
        },
    }
});

export default styles;