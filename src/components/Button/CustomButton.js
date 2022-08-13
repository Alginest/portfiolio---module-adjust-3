import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const useStyles = makeStyles((theme) => ({
  work: {
    color: (props) => props.color,
    backgroundColor: (props) => props.background,
    border: "2px solid white",
    padding: "8px 25px",
    marginTop: "20px ",
    fontFamily: "Raleway",
    textTransform: "capitalize",
    fontSize: 20,
    transition: "background 0.3s ease-in-out",
    "&:hover": {
      background: "#e63768",
      "& $icon": {
        transition: "all 0.4s ease-in",
        transform: "rotate(90deg)",
      },
    },
  },
  icon: {
    fontSize: 23,
    marginLeft: "5px",
    transition: "background 0.1s linear",
  },
}));
const CustomButton = (props) => {
  const classes = useStyles(props);
  return (
    <Button className={classes.work}>
      {props.text}
      <ArrowForwardIcon className={classes.icon} />
    </Button>
  );
};

export default CustomButton;
