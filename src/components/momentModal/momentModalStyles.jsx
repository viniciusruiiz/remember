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
    minHeight: '100%',
  },
  content: {
    height: '80vh'
  },
  commentsBox: {
    height: '55vh',
    overflow:'auto',
  },
});

export default styles