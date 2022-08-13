import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainBox: {
    width: "100%",
    margin: "50px 0",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "1000px",
    },
  },
  boxLeft: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "100px",
    },
  },
  profileImg: {
    width: "300px",
    height: "300px",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  },

  aboutText: {
    width: "70%",
    textAlign: "center",
    margin: "10px 0",
    color: "#616161",
    fontFamily: "Raleway",
  },
  specialLink: {
    color: "#009ada",
    cursor: "pointer",
  },
  hexTitle: {
    marginTop: "10px",
    fontSize: "18pt",
    fontWeight: "bold",
    fontFamily: "Raleway",
    color: "#616161",
  },
  /* Right Side Box */
  boxRight: {
    width: "90%",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
