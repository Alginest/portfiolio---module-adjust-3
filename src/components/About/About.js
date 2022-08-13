import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Profile from "../Profile/Profile";
const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about} id="about">
      <Container className={classes.bigCont}>
        {/* Title */}
        <Typography align="center" className={classes.title}>
          About
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        {/* Technical Things*/}
        <Grid container className={classes.hexBox} spacing={2}>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}>
                <SpeedIcon className={classes.icon} style={{ fontSize: 60 }} />
              </div>
              <Typography className={classes.hexTitle}>Fast</Typography>
              <Typography className={classes.hexAbout}>
                Fast load times and lag free interaction, my highest priority.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}>
                <DevicesIcon
                  className={classes.icon}
                  style={{ fontSize: 60 }}
                />
              </div>
              <Typography className={classes.hexTitle}>Responsive</Typography>
              <Typography className={classes.hexAbout}>
                My layouts will work on any device, big or small.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}>
                <EmojiObjectsIcon
                  className={classes.icon}
                  style={{ fontSize: 60 }}
                />
              </div>
              <Typography className={classes.hexTitle}>Intuitive</Typography>
              <Typography className={classes.hexAbout}>
                Strong preference for easy to use, intuitive UX/UI.
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.hexItem} lg={3}>
            <Box className={classes.itemBox}>
              <div className={classes.hexaDiv}>
                <DynamicFeedIcon
                  className={classes.icon}
                  style={{ fontSize: 60 }}
                />
              </div>
              <Typography className={classes.hexTitle}>Dynamic</Typography>
              <Typography className={classes.hexAbout}>
                Websites don't have to be static, I love making pages come to
                life.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Profile & Skills*/}
        <Profile />
      </Container>
    </section>
  );
};

export default About;
