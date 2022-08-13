import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mobileNav: {
    backgroundColor: "#333",
    width: "100%",
    height: 0,
    zIndex: 100,
    position: "absolute",
    top: 60,
    right: 0,
    transition: "height 0.3s ease-in-out",
    flexDirection: "column",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileNavActive: {
    backgroundColor: "#333",
    width: "100%",
    height: "250px",
    position: "absolute",
    top: 60,
    zIndex: 10,
    right: 0,
  },
  mobilePaw: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
  mobileLi: {
    listStyle: "none",
    padding: "10px 20px",
  },
  mobileLink: {
    fontSize: "12pt",
    textTransform: "uppercase",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#e31b6d",
      textDecoration: "none",
    },
  },
}));
