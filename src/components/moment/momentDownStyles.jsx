import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    // position: 'relative',
  },
  circle: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: purple[300],
    position: 'relative',
    top: '40vh',
    left: 200,
    marginRight: 200,
    '&::before': {
      display: 'inline-block',
      content: `''`,
      borderTop: '2px solid rgba(255,255,255,0.4)',
      position: 'absolute',
      width: 200,
      left: -200,
      top: 10,
    },
    '&::after': {
      display: 'inline-block',
      content: `''`,
      position: 'absolute',
      left: -10,
      bottom: -30,
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderBottom: '20px solid rgba(0,0,0,0.5)',
    },
  },
  img: {
    zIndex: -1,
    position: 'absolute',
    border: '3px solid rgba(0,0,0,0.5)',
    objectFit: 'cover',
    width: 240,
    height: 144,
    top: 50,
    left: -110,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 0.2s ease-in-out',
    },
  },
  filter: {
    zIndex: 3,
    position: 'absolute',
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 246,
    height: 150,
    top: 50,
    left: -110,
  },
  load: {
    zIndex: 4,
    position: 'absolute',
    left: -10,
    bottom: -127,
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
    top: 30,
    left: -108,
    fontWeight: 100,
    fontSize: 15,
  },
});

export default styles