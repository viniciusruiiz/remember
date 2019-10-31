import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  img: {
    zIndex: -1,
    borderRadius: 25,
    border: '3px solid rgba(255,255,255,0.8)',
    // position: 'absolute',
    objectFit: 'cover',
    width: 240,
    height: 144,
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
    position: 'absolute',
    top: -30,
    left: -108,
    fontWeight: 100,
    fontSize: 15,
  },
});

export default styles