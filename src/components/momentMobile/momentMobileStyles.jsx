import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    padding: 20,
    paddingTop: 0,
    maxWidth: '100%',
    marginBottom: 30,
  },
  img: {
    maxWidth: '100%',
    zIndex: -1,
    borderRadius: 25,
    // border: '3px solid rgba(255,255,255,0.8)',
    // position: 'absolute',
    objectFit: 'cover',
    // height: 144,
    // bottom: 50,
    // left: -110,
    // transition: 'all 0.2s ease-in-out',
    // '&:hover': {
    //   cursor: 'pointer',
    //   transform: 'scale(1.05)',
    //   transition: 'all 0.2s ease-in-out',
    // },
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
    fontWeight: 100,
    fontSize: 15,
  },
});

export default styles