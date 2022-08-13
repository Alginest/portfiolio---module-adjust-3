import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const UiProcent = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>HTML</Typography>
        </Box>
        <Box className={classes.precentBox}></Box>
        <Box className={classes.numberBox}>
          <Typography className={classes.numDoc}>90%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>CSS</Typography>
        </Box>
        <Box className={classes.precentBox}></Box>
        <Box className={classes.numberBox}>
          <Typography className={classes.numDoc}>90%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>React</Typography>
        </Box>
        <Box className={classes.precentBox}></Box>
        <Box className={classes.numberBox}>
          <Typography className={classes.numDoc}>90%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Javascript</Typography>
        </Box>
        <Box className={classes.jasDoc}></Box>
        <Box className={classes.jasSm}>
          <Typography className={classes.numDoc}>80%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Material UI</Typography>
        </Box>
        <Box className={classes.muiDoc}></Box>
        <Box className={classes.muiSm}>
          <Typography className={classes.numDoc}>80%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Git</Typography>
        </Box>
        <Box className={classes.npmDoc}></Box>
        <Box className={classes.npmSm}>
          <Typography className={classes.numDoc}>70%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Photoshop</Typography>
        </Box>
        <Box className={classes.psDoc}></Box>
        <Box className={classes.psSm}>
          <Typography className={classes.numDoc}>50%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Firebase</Typography>
        </Box>
        <Box className={classes.fireDoc}></Box>
        <Box className={classes.fireSm}>
          <Typography className={classes.numDoc}>40%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Redux</Typography>
        </Box>
        <Box className={classes.fireDoc}></Box>
        <Box className={classes.fireSm}>
          <Typography className={classes.numDoc}>40%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Styled</Typography>
        </Box>
        <Box className={classes.fireDoc}></Box>
        <Box className={classes.fireSm}>
          <Typography className={classes.numDoc}>40%</Typography>
        </Box>
      </Box>
      <Box className={classes.megaBox}>
        <Box className={classes.nameBox}>
          <Typography className={classes.numProc}>Bootstrap</Typography>
        </Box>
        <Box className={classes.bootDoc}></Box>
        <Box className={classes.bootSm}>
          <Typography className={classes.numDoc}>30%</Typography>
        </Box>
      </Box>
    </>
  );
};

export default UiProcent;
