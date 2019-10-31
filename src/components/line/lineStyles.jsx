import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root:{
    whiteSpace: 'nowrap',
    width: '100%',
    height: '100%',
    marginRight: 200,
  },
  rootMobile: {
    marginTop: 200,
  },
  not: {
    zIndex: '10',
    position: 'fixed',
    top: 160,
    left: 90,
    fontSize: 18,
    fontWeight: '100',
    whiteSpace: 'pre-wrap',
  },
});

export default styles