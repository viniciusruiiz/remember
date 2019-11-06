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
    maxWidth:'60vw',
    maxHeight: '80vh',
    // borderRight:
  },
  content: {
    overflow:'auto',
    height: '80vh'
  },
  input: {
    bottom: -10,
    left: 0,
    width: '100%',
    position: 'relative',
    background: 'white',
    margin: 0,
    '& .MuiFilledInput-underline:after': {
    },
  },
  RSC: {
    height: '72.5vh!important',
    overflowX: 'hidden',
  },
});

export default styles