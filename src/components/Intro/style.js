import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  dev: {
    fontSize: "40px",
    fontFamily: "Raleway",
    letterSpacing: 1.1,
    color: "#fff",
    fontWeight: 500,
    backgroundColor: "#252934",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  name: {
    letterSpacing: 1.1,
    fontFamily: "Raleway",
    fontSize: "40px",
    color: "#e63768",
    fontWeight: 600,
    backgroundColor: "#252934",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  dot: {
    fontFamily: "Raleway",
    fontSize: "40px",
    color: "#fff",
    fontWeight: 500,
    backgroundColor: "#252934",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  job: {
    fontSize: "45px",
    fontFamily: "Raleway",
    letterSpacing: 1.1,
    color: "#fff",
    fontWeight: 500,
    marginRight: 7,
    backgroundColor: "#252934",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  typed: {
    fontSize: "45px",
    fontFamily: "Raleway",
    letterSpacing: 1.1,
    color: "#fff",
    fontWeight: 500,
    backgroundColor: "#252934",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  lowerTxt: {
    display: "flex",
  },
}));
