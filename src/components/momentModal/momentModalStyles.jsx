import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    outline: "none",
    '&:focus':{
      outline: "none" // não funciona
    }
  },
  imgLightBox: {
    maxWidth:'100%',
    maxHeight: '80vh',
    minHeight: '100%',
  },
});

export default styles