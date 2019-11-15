import { createStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    bar: {
        background: "white",
        color: "black",
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.2)'
    },
    notifications: {
        color: '#1f1f1f',
        // marginRight: theme.spacing(2),
    },
    perfil: {
        height: theme.spacing(4),
        margin: theme.spacing(1,1,1,2),
        borderRadius: 50,
    },
    logoIcon: {
        height: theme.spacing(5),
        margin: (8, 4, 8, 4),
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
        top: 49,
        width: 200,
        right: 0,
    },
    button: {
        padding: theme.spacing(0,1,0,2),
        height: 48,
        textTransform: 'none',
    },
    buttonNotif: {
        height: 48,
        textTransform: 'none',
    },
    toolbar: {
        padding: (16,0,16,0),
        minHeight: 0,
    },
    font14: {
        fontSize: 14,
    },
    invite: {
        marginBottom: 10,
    },
    paperNotif: {
        zIndex: 2,
        position: 'absolute',
        top: 49,
        width: 200,
        right: 0,
        padding: 25,
        paddingBottom: 10,
        color: '#1f1f1f',
    },
    bold: {
        fontWeight: 500,
        fontSize: 15,
    },
    btnInvite: {
        borderRadius: '100%',
        float: 'right',
        minWidth: 0,
        width: 36,
    },
});

export default styles