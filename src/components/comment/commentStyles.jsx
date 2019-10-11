import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    paddingRight: "20px",
    marginBottom: '15px',
    borderRadius: "0 30px 30px 0",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: 'rgb(230,230,230)',
    padding: theme.spacing(2),
    fontWeight: 100,
  },
  
  commentOwner: {
    fontSize: 16,
  },
  commentOwnerPhoto: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: "inline-block",
    verticalAlign: 'top',
    margin: theme.spacing(0,2,2,0),  
  },
  commentContent: {
    fontSize: 14,
    fontWeight: 100,
  },
});

export default styles