import { createStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    paddingTop: 49,
  },

  bodyRoot: {
    color: 'black',
    height: '100%',
    display: 'inline-block',
  },
  link: {
    color: 'black',
  },
  hideSpan: {
    margin: 0,
    padding: 0,
    position: "absolute",
    height: 0,
    overflow: "hidden",
    whiteSpace: "pre",
  },
  editIcon: {
    cursor: "pointer",
    visibility: "hidden",
    transition: "opacity 0.2s ease",
    opacity: 0
  },
  titleIpt: {
    border: "none",
    display: "inline",
    color: "inherit",
    font: "inherit",
    padding: "none",
    width: "auto",
    minWidth: "20px",
    backgroundColor: "inherit",
    margin: "0 5px 0 0",
    '&:focus + #edit-icon': {
      visibility: "visible",
      opacity: 1
    },
  },
  fab: {
    zIndex: 3,
    position: 'fixed',
    right: 20,
    bottom: 20,
    background: green[500],
    '&:hover': {
      background: green[600],
    },
    '&:active': {
      background: green[500],
    },
    '&:focus': {
      background: green[500],
    },
  },
  back: {
    marginRight: theme.spacing(2),
    verticalAlign: 'middle',
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    whiteSpace: 'pre-wrap',
    '&:hover #edit-icon': {
      visibility: "visible",
      opacity: 1
    },
    transition: "opacity 0.2s ease",
  },
  titleMob: {
    fontSize: 26,
    fontWeight: '300',
    whiteSpace: 'pre-wrap',
    '&:hover #edit-icon': {
      visibility: "visible",
      opacity: 1
    },
    transition: "opacity 0.2s ease",
    marginTop: "0.3em",
    wordBreak: "break-word"
  },
  membersDiv: {
    flex: "1"
  },
  titleContainer: {
    zIndex: '10',
  },
  grid: {
    width: '96%',
    position: 'fixed',
    margin: theme.spacing(2, 3, 0, 3),
  },
  gridMobile: {
    width: '94%',
    margin: "0 0 0 3%",
  },
  gridMobileHeader: {
    width: '94%',
    margin: "0 0 0 3%",
    display: "inline-flex"
  },
  adicionar: {
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: green[300],
    },
    marginRight: theme.spacing(2),
    //width: '100%',
  },
  adicionarMob: {
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: green[300],
    },
    marginRight: theme.spacing(2),
    width: '100%',
  },
  // adicionarInput: {
  //   color: 'red',
  // },
  membersIcons: {
    marginTop: 11,
    width: 35,
    height: 35,
    borderRadius: '50%',
    top: 20,
    margin: theme.spacing(0, 2, 0, 0),
    objectFit: 'cover',
  },
  membersIconModal: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: "18px",
    display: "inline-block",
  },
  membersModal: {
    display: "flex",
    /* flex-direction: column,*/
    alignItems: "center",
    marginBottom: "20px"
  },
  memberName: {
    display: "inline-block",
    margin: 0,
  },
  membersIconsMob: {
    marginTop: 11,
    width: 35,
    height: 35,
    borderRadius: '50%',
    top: 20,
    margin: theme.spacing(0, 2, 0, 0),
    float: "right",
    objectFit: 'cover',
  },
  gridRight: {
    width: '100%',
  },
  membros: {
    float: 'right',
    position: 'relative',
    textAlign: 'center',
  },
  lastMemberIcon: {
    marginTop: 11,
    width: 35,
    height: 35,
    borderRadius: '50%',
    top: 20,
    margin: theme.spacing(0, 2, 0, 0),
    objectFit: 'cover',
    filter: 'brightness(25%)',
    cursor: 'pointer',
  },
  lastMemberIconMob: {
    marginTop: 11,
    width: 35,
    height: 35,
    borderRadius: '50%',
    top: 20,
    margin: theme.spacing(0, 1, 0, 0),
    float: "right",
    objectFit: 'cover',
    filter: 'brightness(25%)',
    cursor: 'pointer',
  },
  plusicon: {
    position: 'absolute',
    top: 17,
    right: 69,
    fontSize: '26px',
    cursor: 'pointer',
    color: 'rgba(255,255,255,.9)'
  },
  plusiconmob: {
    position: 'absolute',
    top: 69,
    right: 73,
    fontSize: '26px',
    cursor: 'pointer',
    color: 'rgba(255,255,255,.9)'
  },
  options: {
    marginBottom: 28,
    color: 'black',
  },
  optionsMob: {
    marginTop: 4,
    color: 'black',
    float: "right"
  },
  paper: {
    zIndex: 7,
    position: 'absolute',
    top: 56,
    width: 200,
    right: 0,
    paddingRight: 10,
  },
  candidatos: {
    listStyleType: "none",
    position: "absolute",
    padding: 0,
    margin: 0,
    top: 48,
    width: "257px",
  },
  candidatosMobile: {
    listStyleType: "none",
    position: "absolute",
    padding: 0,
    margin: 0,
    top: 157,
    width: "auto",
    minWidth: 250,
    maxWidth: 360
  },
  candidato: {
    border: "1px solid #ddd",
    marginTop: "-1px",
    backgroundColor: "#F6F6F6",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    zIndex: 999,
    "&:hover": {
      backgroundColor: "#D2D2D2",
    }
  },
  candidatoImg: {
    marginRight: 12,
    float: 'left',
    width: 35,
    height: 35,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: "pointer",
  },
  apagar: {
    color: '#fc5340',
  },
  not: {
    zIndex: '10',
    position: 'fixed',
    top: 160,
    left: 90,
    fontSize: 18,
    fontWeight: '100',
    whiteSpace: 'pre-wrap',
  },
  notMobile: {
    zIndex: '10',
    marginLeft: 20,
    marginTop: 25,
    fontSize: 18,
    fontWeight: '100',
    whiteSpace: 'pre-wrap',
  },
  input: {
    '& label.Mui-focused': {
      color: '#38B49D',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#38B49D',
    },
  }
});

export default styles