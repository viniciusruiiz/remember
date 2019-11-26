import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    borderRadius: "0 10px 10px 0",
    backgroundColor: "rgb(240,240,240)",
    borderLeft: '1px solid black',
    padding: theme.spacing(2,3,2,2),
    fontWeight: 100,
  },
  donoImg: {
    width: 45,
    height: 45,
    borderRadius: '50%',
    display: "inline-block",
    verticalAlign: 'top',
    margin: theme.spacing(0,2,2,0),
    objectFit: 'cover',
  },
  donoName: { 
    fontSize: 14,
    fontWeight: 600,
  },
  momentDate: {
    fontSize: 12,
    fontWeight: 100,
  },
  description: {
    fontSize: 13,
    fontWeight: 300,
  },
});

export default styles