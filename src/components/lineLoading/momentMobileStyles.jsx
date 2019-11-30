import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root: {
    padding: "0 20px 5px 20px",
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
    opacity: 0.4,
    animation: `flickerAnimation 1.5s infinite`,
    '-webkit-animation': "flickerAnimation 1.5s infinite",
    '-moz-animation': "flickerAnimation 1.5s infinite",
    '-o-animation': "flickerAnimation 1.5s infinite",
  },
  img: {
    backgroundColor: "rgba(0,0,0,.2)",
    height: "300px",
    width: '100%',
    zIndex: -1,
    borderRadius: 20,
    objectFit: 'cover',
  },
});

export default styles