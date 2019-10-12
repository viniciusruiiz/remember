import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
  imgLightBox: {
    maxWidth:'100%',
    maxHeight: '80vh',
    // borderRight:
  },
  content: {
    overflow:'auto',
    height: '80vh'
  },
});

export default styles