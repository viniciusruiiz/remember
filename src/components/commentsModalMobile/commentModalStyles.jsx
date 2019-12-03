import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  comment: {
    backgroundColor: "rgba(124,202,108,.1)",
    width: 'auto',
    borderRadius: "25px",
    padding: '2px 0 8px 0'
    // border: "1px solid rgba(0,0,0,.5)",
    // minHeight: 50,
    // wordBreak: "break-word",
    // marginBottom: 20
  },
  ownerPic: {
    float: 'left',
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    float: "left",
    marginRight: 10
  },
});

export default styles