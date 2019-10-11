import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    width: "100%",
    marginBottom: '15px',
    borderRadius: "0 30px 30px 0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: 'rgb(230,230,230)',
    padding: theme.spacing(2),
    fontWeight: 100,
  },
  donoImg: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    display: "inline-block",
    verticalAlign: 'top',
    margin: theme.spacing(0,2,2,0),
  },
  donoName: { 
    fontSize: 16,
  },
  momentDate: {
    fontSize: 13,
    fontWeight: 100,
  },
  description: {
    fontSize: 14,
    fontWeight: 100,
  },
});

export default styles