import { createStyles } from "@material-ui/core";

const styles = (theme) => createStyles({
  root: {
    width: "100%",
    marginBottom: '15px',
    borderRadius: "0 30px 30px 0",
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
  },
  donoImg: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    display: "inline-block",
  },
  donoDetail: {
    maxHeight: 60,
    marginBottom: "1vh",
    display: "inline-block",
    position: "static",
    overflow: "hidden",
    
  },
  donoName: {
    fontSize: 20,
    fontWeight: 1,
    color: "white",
    margin: "0 0 5px 0"
  },
  momentDate: {
    fontSize: 13,
    fontWeight: 1,
    color: "white",
    margin: 0
  },
  description: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: 1,
  },
});

export default styles