import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    padding: 20,
    paddingTop: 0,
    maxWidth: '100%',
    // '&::after': {
    //   display: 'inline-block',
    //   content:`''`,
    //   position: 'absolute',
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   height: '0.5em',
    //   borderTop: '1px solid black',
    //   zIndex: -1,
    // },
  },
  img: {
    maxWidth: '100%',
    zIndex: -1,
    borderRadius: 20,
    objectFit: 'cover',
  },
  filter: {
    zIndex: 3,
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 246,
    height: 150,
    bottom: 50,
    left: -110,
  },
  load: {
    zIndex: 4,
    position: 'absolute',
    left: -10,
    bottom: 108,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    outline: 'none',
  },
  imgLightBox: {
    maxWidth:'70%',
    maxHeight: '120vh',
  },
  date: {
    marginTop: 5,
  },
  dateMonth: {
    textAlign: 'center',
    fontWeight: 100,
    fontSize: 15,
  },
  dateDay: {
    textAlign: 'center',
    fontWeight: 100,
    fontSize: 19,
    lineHeight: '100%',
    marginBottom: 2,
  },
  dateYear: {
    textAlign: 'center',
    fontWeight: 100,
    fontSize: 12,
  },
  description: {
    fontWeight: 300,
    fontSize: 15,
  },
});

export default styles