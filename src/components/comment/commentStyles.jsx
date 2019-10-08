import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    paddingRight: "20px",
    paddingBottom: "5px",
    borderRadius: "0 40px 40px 0",
    marginBottom: '15px',
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  comment: {
    maxHeight: 60,
    marginBottom: "1vh",
    display: "inline-block",
    position: "static",
    overflow: "hidden",
  },
  
  commentOwner: {
    fontSize: 20,
    fontWeight: 1,
    color: "white",
    margin: "2vh 0 5px 0"
  },
  commentOwnerPhoto: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    display: "inline-block",
    verticalAlign: "middle"  
  },
  commentContent: {
    fontSize: 16,
    marginLeft: 10, 
    fontWeight: 1,
    color: "white",
    margin: 0
  },
});

export default styles