import { Box, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import HexImage from "../../img/HexImage.jpg";
import UiProcent from "../UiProcent/UiProcent";
const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.boxLeft}>
          {/* Hex Image Profile*/}

          <img src={HexImage} alt="" className={classes.profileImg} />

          {/* About Me Profile*/}

          <Typography className={classes.hexTitle}>Who's this guy?</Typography>
          <Typography className={classes.aboutText}>
            I'm a Front-End Developer who was been self taught for a year and
            half. I have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            <br />
            <Link className={classes.specialLink}>
              {" "}
              Let's make something special.
            </Link>
          </Typography>
        </Box>
        <Box className={classes.boxRight}>
          <UiProcent />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
