import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    marginTop: '5px',
    borderLeft: '1px solid black',
    borderRadius: "0 10px 10px 0",
    backgroundColor: "rgb(240, 240, 240)",
    padding: theme.spacing(2,2,2,2),
    fontWeight: 100,
    display: 'inline-block'
  },
  commentOwner: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: theme.spacing(2),  
  },
  date: {
    fontSize: 12,
    fontWeight: 100,
  },
  commentOwnerPhoto: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: "inline-block",
    verticalAlign: 'top',
    margin: theme.spacing(0,2,2,0),  
    objectFit: 'cover',
  },
  commentContent: {
    fontSize: 13,
    fontWeight: 300,
    color: 'black'
  },
});

export default styles