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
    top: '50vh',
    left: 200,
    marginRight: 200,
    '&::before': {
      display: 'inline-block',
      content: `''`,
      borderTop: '2px solid rgba(255,255,255,0.8)',
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
    zIndex: 2,
    position: 'absolute',
    border: '3px solid rgba(0,0,0,0.5)',
    objectFit: 'cover',
    width: 300,
    height: 180,
    top: 50,
    left: -140,
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'all 0.2s ease-in-out',
    },
  },
  filter: {
    zIndex: 3,
    position: 'absolute',
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 306,
    height: 186,
    top: 50,
    left: -140,
    [theme.breakpoints.down('md')]: {
      top: 60,
    },   
  },
  load: {
    zIndex: 4,
    position: 'absolute',
    bottom: -135,
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
  }
});

export default styles