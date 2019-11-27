import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const color = "rgba(0,0,0,0.25)"
const color2 = "rgba(0,0,0,0.1)"
const color3 = "rgba(0,0,0,0.2)"
const DURATION = 550

const styles = (theme) => createStyles({
    root: {
        position: 'relative',
        opacity: 0.4,
        animation: `flickerAnimation 1.5s infinite`,
        '-webkit-animation': "flickerAnimation 1.5s infinite",
        '-moz-animation': "flickerAnimation 1.5s infinite",
        '-o-animation': "flickerAnimation 1.5s infinite",
        // marginTop: 15
    },
    card: {
        borderRadius: 25,
        boxShadow: 'none',
        border: '1px solid rgba(0,0,0,0.25)',
        height: '100%',

    },
    media: {
        maxHeight: '40%',
        borderBottom: "1px solid " + color,
        backgroundColor: "rgba(0,0,0,0.2)"
    },
    content: {
        alignItems: 'center',
        position: 'relative',
        padding: 10,
        paddingLeft: 17,
        "&:last-child": {
            paddingBottom: 10,
        },
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    title: {
        color: 'rgba(0,0,0,0.8)',
        fontWeight: 500,
        fontSize: 14,
    },
    subtitle: {
        fontSize: 12,
    },
    options: {
        alignItems: 'center',
    },
    bigImage: {
        padding: 'none',
        objectFit: 'cover',
        width: '100%',
        height: 48 * 3,
    },
    tinyImage: {
        padding: 'none',
        display: 'inline-block',
        objectFit: 'cover',
        width: '100%',
        height: 48,
    },
    middleImage: {
        padding: 'none',
        display: 'inline-block',
        objectFit: 'cover',
        width: '100%',
        height: 48 * 1.5,
    },
    member: {
        height: theme.spacing(4),
        width: theme.spacing(4),
        margin: 5,
        borderRadius: 50,
        border: "1px solid " + color,
        backgroundColor: color3,
    },
    right: {
        alignItems: 'center',
        marginLeft: 'auto',
        alignItems: 'right',
        alignItems: 'right',
    },
    notification: {
        zIndex: 2,
        position: 'absolute',
        color: 'white',
        fontSize: 12,
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: purple[300],
        right: 3,
        top: 3,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '30px',
    },
    mediaButton: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
    '@keyframes flickerAnimation': {
        '0% ': { opacity: 0.4 },
        '100%': { opacity: 0 },
    },
    '@-o-keyframes flickerAnimation': {
        '0%': { opacity: 0.4 },
        '100% ': { opacity: 0 },
    },
    '@-moz-keyframes flickerAnimation': {
        '0% ': { opacity: 0.4 },
        '100% ': { opacity: 0 },
    },
    '@-webkit-keyframes flickerAnimation': {
        '0% ': { opacity: 0.4 },
        '100% ': { opacity: 0 },
    },
});

export default styles