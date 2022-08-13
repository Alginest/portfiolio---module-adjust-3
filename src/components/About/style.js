import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  about: {
    height: 1150,
    padding: "100px 0",
    backgroundColor: "white",
  },
  title: {
    color: "#444649",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "#444649",
  },
  /*hexBox*/

  hexBox: {
    width: "100%",
    margin: "30px 0",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  hexaDiv: {
    width: "120px",
    height: "110px",
    backgroundColor: "#04c2c9",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hexItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      margin: "20px 0",
    },
  },
  itemBox: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    color: "white",
  },
  hexTitle: {
    margin: "10px 0",
    fontSize: "18pt",
    fontWeight: "bold",
    fontFamily: "Raleway",
    color: "#616161",
  },
  hexAbout: {
    color: "#616161",
    fontFamily: "Raleway",
  },
}));
