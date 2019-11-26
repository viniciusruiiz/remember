import { createStyles } from "@material-ui/core";
import { grey, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
    bar: {
        background: "white",
        color: "black",
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.2)'
    },
    notifications: {
        color: '#1f1f1f',
        padding: 0
        // marginRight: theme.spacing(2),
    },
    perfil: {
        height: theme.spacing(4),
        width: theme.spacing(4),
        margin: theme.spacing(1,1,1,2),
        borderRadius: 50,
        objectFit: 'cover',
    },
    perfilMob: {
        height: theme.spacing(4),
        width: theme.spacing(4),
        margin: theme.spacing(0,0,0,1),
        borderRadius: 50,
        objectFit: 'cover',
    },
    logoIcon: {
        height: theme.spacing(5),
        margin: (8, 0, 8, 4),
    },
    logoIconMob: {
        height: theme.spacing(4),
        margin: '8px 4px 8px 0',
    },
    logoText: {
        fontFamily: 'Major Mono Display',
        fontSize: 20,
        lineHeight: "100%",
        flexGrow: 1,
    },
    logoTextMob: {
        fontFamily: 'Major Mono Display',
        fontSize: 14,
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
        padding: 0
    },
    buttonNotifMob: {
        height: 48,
        textTransform: 'none',
        padding: 0,
        minWidth: 48
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
    notificationCount: {
        zIndex:2,
        position: 'absolute',
        color: 'white',
        fontSize: 11,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: purple[300],
        right: 11,
        top: 7,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '18px',
      },
      notificationCountMob: {
        zIndex:2,
        position: 'absolute',
        color: 'white',
        fontSize: 11,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: purple[300],
        right: 3,
        top: 7,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '18px',
      },
      userMob: {
          fontSize: 12
      }
});

export default styles