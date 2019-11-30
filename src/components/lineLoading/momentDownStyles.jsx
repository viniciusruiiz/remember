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
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'relative',
    top: '33vh',
    left: 200,
    marginRight: 200,
    '&::before': {
      display: 'inline-block',
      content: `''`,
      borderTop: '2px solid rgba(0,0,0,0.2)',
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
      borderBottom: '20px solid rgba(0,0,0,0.2)',
    },
    opacity: 0.4,
    animation: `flickerAnimation 1.5s infinite`,
    '-webkit-animation': "flickerAnimation 1.5s infinite",
    '-moz-animation': "flickerAnimation 1.5s infinite",
    '-o-animation': "flickerAnimation 1.5s infinite",
  },
  img: {
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: -1,
    position: 'absolute',
    borderRadius: 25,
    border: '1px solid rgba(0,0,0,0.2)',
    objectFit: 'cover',
    width: 240,
    height: 144,
    top: 50,
    left: -110,
    transition: 'all 0.2s ease-in-out',
  },
});

export default styles