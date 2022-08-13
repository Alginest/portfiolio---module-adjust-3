import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  megaBox: {
    width: "600px",
    height: "28px",
    display: "flex",
    marginBottom: "15px",
    [theme.breakpoints.down("lg")]: {
      width: "550px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "360px",
    },
  },
  nameBox: {
    width: "20%",
    backgroundColor: "#04c2c9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  precentBox: {
    width: "70%",
    backgroundColor: "#00a1a7",
    [theme.breakpoints.down("xs")]: {
      width: "68%",
    },
  },
  numberBox: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "12%",
    },
  },
  numProc: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  numDoc: {
    fontFamily: "Raleway",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  /* sideProcents */
  jasDoc: {
    width: "60%",
    backgroundColor: "#00a1a7",
  },
  jasSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "20%",
  },
  muiDoc: {
    width: "60%",
    backgroundColor: "#00a1a7",
  },
  muiSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "20%",
  },
  npmDoc: {
    width: "50%",
    backgroundColor: "#00a1a7",
  },
  npmSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "30%",
  },
  psDoc: {
    width: "40%",
    backgroundColor: "#00a1a7",
  },
  psSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "40%",
  },
  fireDoc: {
    width: "30%",
    backgroundColor: "#00a1a7",
  },
  fireSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "50%",
  },
  bootDoc: {
    width: "20%",
    backgroundColor: "#00a1a7",
  },
  bootSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "60%",
  },
}));
