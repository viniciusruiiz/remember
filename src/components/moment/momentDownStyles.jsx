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
      borderTop: '.2rem dashed white',
      position: 'absolute',
      width: 200,
      left: -200,
      top: 17.5,
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
});

export default styles