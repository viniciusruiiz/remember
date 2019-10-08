import { createStyles } from "@material-ui/core";
import { red, purple } from "@material-ui/core/colors";

const styles = (theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
    outline: "none",
    '&:focus':{
      outline: "none" // não funciona
    }
  },
  imgLightBox: {
    maxWidth:'100%',
    maxHeight: '80vh',
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
  commentContent: {
    fontSize: 16,
    marginLeft: 10, 
    fontWeight: 1,
    color: "white",
    margin: 0
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
  }
});

export default styles