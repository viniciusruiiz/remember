import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  circle: {
    display: 'inline-block',
    width: 35,
    height: 35,
    borderRadius: '50%',
    backgroundColor: purple[300],
    position: 'relative',
    top: '50vh',
    left: 200,
    marginRight: 200,
    '&::before': {
      display: 'inline-block',
      content: `''`,
      borderTop: '2px dashed rgba(255,255,255,0.8)',
      position: 'absolute',
      width: 200,
      left: -200,
      top: 17.5,
    },
    '&::after': {
      display: 'inline-block',
      content: `''`,
      borderRight: '2px dashed rgba(255,255,255,0.5)',
      position: 'absolute',
      width: 200,
      height: 25,
      left: -184,
      bottom: 35,
    },
  },
  img: {
    zIndex: 2,
    border: '3px solid rgba(0,0,0,0.2)',
    position: 'absolute',
    objectFit: 'cover',
    width: 300,
    height: 180,
    bottom: 60,
    left: -132.5,
  },
  filter: {
    zIndex: 3,
    position: 'absolute',
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 306,
    height: 186,
    bottom: 60,
    left: -132.5,
  },
  load: {
    zIndex: 4,
    position: 'absolute',
    bottom: 135,
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