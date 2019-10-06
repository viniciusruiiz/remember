import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    // position: 'relative',
  },
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
      borderTop: '.2rem dashed rgba(255,255,255,0.8)',
      position: 'absolute',
      width: 200,
      left: -200,
      top: 17.5,
    },
    '&::after': {
      display: 'inline-block',
      content: `''`,
      borderRight: '.2rem dashed rgba(255,255,255,0.5)',
      position: 'absolute',
      width: 200,
      height: 65,
      left: -184,
      top: 35,
    },
  },

  img: {
    position: 'absolute',
    objectFit: 'cover',
    width: 300,
    height: 180,
    top: 100,
    left: -132.5,
  },

  filter: {
    zIndex: 3,
    position: 'absolute',
    backgroundColor: 'rgba(30,30,30,0.3)',
    width: 300,
    height: 180,
    top: 100,
    left: -132.5,
  },

  load: {
    zIndex: 4,
    position: 'absolute',
    bottom: -175,
  },
});

export default styles