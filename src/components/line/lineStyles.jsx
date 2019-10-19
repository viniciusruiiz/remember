import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  root:{
    whiteSpace: 'nowrap',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      transform: 'scale(0.8)',
      transformOrigin: 'left',
      marginTop: '4%',
  },
  },
  not: {
    zIndex: '10',
    position: 'fixed',
    top: 136,
    left: 25,
    fontSize: 18,
    fontWeight: '100',
    whiteSpace: 'pre-wrap',
  },
});

export default styles