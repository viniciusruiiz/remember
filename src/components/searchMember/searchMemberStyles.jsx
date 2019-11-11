import { createStyles, makeStyles } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";

const styles = makeStyles({
    adicionar: {
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: green[300],
      },
      marginRight: 16,
    },
    adicionarInput: {
      color: 'black',
    },
});

export default styles