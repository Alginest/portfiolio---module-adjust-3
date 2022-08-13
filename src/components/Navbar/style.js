import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  navbar: {
    display: "flex",
    position: "relative",
    zIndex: 100,
  },
  appBar: {
    backgroundColor: "#1b242f",
    height: 60,
    borderBottom: "3px solid #04c2c9",
  },
  toolBar: {
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  li: {
    listStyle: "none",
    margin: "0 20px",
    textDecoration: "none",
  },
  link: {
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontWeight: 400,
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#e31b6d",
      textDecoration: "none",
      fontWeight: "bold",
    },
  },
  bigCont: {
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  faBars: {
    fontSize: "40px",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  faBarsActive: {
    transform: "rotate(90deg)",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
