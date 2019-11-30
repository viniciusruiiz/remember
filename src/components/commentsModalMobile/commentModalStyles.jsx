import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  comment: {
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: "25px",
    border: "1px solid rgba(0,0,0,.5)",
    minHeight: 50,
    wordBreak: "break-word",
    marginBottom: 20
  },
  ownerPic: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    float: "left",
  },
  content: {
    marginRight: 10,
    marginLeft: 10,
  }
});

export default styles