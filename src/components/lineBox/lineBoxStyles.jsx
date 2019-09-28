import { createStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  media: {
    maxHeight: '60%',
  },
  content: {
    alignItems: 'center',
    position: 'relative',
    paddingRight: 0,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
  options: {
    alignItems: 'center',
  },
  bigImage: {
    padding: 'none',
    objectFit: 'cover',
    width: '100%',
    height: 198,
  },
  tinyImage: {
    padding: 'none',
    display: 'inline-block',
    objectFit: 'cover',
    width: '100%',
    height: 66,
  },
  member: {
    height: theme.spacing(4),
    margin: 5,
    borderRadius: 50,
  },
  right: {
    alignItems: 'center',
    marginLeft: 'auto',
    alignItems: 'right',
    alignItems: 'right',
  }
});

export default styles