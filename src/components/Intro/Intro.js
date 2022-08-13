import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import Typed from "react-typed";
import CustomButton from "../Button/CustomButton";
const Intro = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.upperTxt}>
        <Typography variant="h2" className={classes.dev}>
          Hello, I'm{" "}
          <Typography variant="h2" component="span" className={classes.name}>
            Aldin Duraković
            <Typography component="span" className={classes.dot}>
              .
            </Typography>
          </Typography>
        </Typography>
      </div>
      <div className={classes.lowerTxt}>
        <p className={classes.job}>I'm </p>
        <Typed
          className={classes.typed}
          strings={[
            "a front end developer.",
            "disciplined worker.",
            "a self believer.",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
      </div>
      <CustomButton color={"white"} background={"none"} text={"View my work"} />
    </>
  );
};

export default Intro;
