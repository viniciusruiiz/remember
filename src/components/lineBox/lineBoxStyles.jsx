import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  card: {
    position: 'relative',
  },
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
  },
  notification: {
    zIndex:2,
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    width: 30,
    height: 30,
    borderRadius: '50%',
    background: purple[300],
    right: 3,
    top: 3,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '30px',
  },
  mediaButton: {
    padding: 0,
    margin: 0,
  }
});

export default styles