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
    backgroundColor: "rgba(0,0,0,.2)",
    height: "300px",
    width: '100%',
    zIndex: -1,
    borderRadius: 20,
    objectFit: 'cover',
  },
});

export default styles