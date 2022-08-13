import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import Modal from "../Modal/Modal";
import React from "react";
import PropTypes from "prop-types";
import { webData } from "../../data/webData";
import { useGlobalContext } from "../../contextApi";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    padding: 0,
  },
  projects: {
    height: "auto",
    padding: "100px 0",
    backgroundColor: "#f5f5f5",
  },
  title: {
    color: "#444649",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "#444649",
  },
  tabs: {
    marginTop: 100,
    width: 1200,
  },
  webImg: {
    width: "390px",
    height: "300px",
    transition: "all 0.5s  ease-in",
    position: "absolute",
  },
  webBack: {
    transition: "all 0.5s  ease-in-out",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  textBack: {
    position: "absolute",
    display: "flex",
    top: "10%",
    height: "200px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textSubTitle: {
    color: "#f50057",
    fontWeight: 300,
  },
  btnHov: {
    position: "absolute",
    bottom: 0,
    height: "40px",
    width: "172px",
    border: "2px solid #f50057",
    transition: "all 0.3s ease-in-out",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#f50057",
      color: "white",
    },
  },
  gridCont: {
    marginTop: 50,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  gridItem: {
    width: 390,
    height: 300,
    animation: `$myEffectExit 1000ms ${theme.transitions.easing.easeInOut}`,
    transition: "all 0.3s  ease-in",
    "&:hover": {
      cursor: "pointer",
      "& $webBack": {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      },
      "& $webImg": {
        display: "none",
      },
      "& $textBack": {
        animation: `$myEffectDown 1000ms ${theme.transitions.easing.easeInOut}`,
      },
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  "@keyframes myEffectUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes myEffectDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-50%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
export const Projects = () => {
  const classes = useStyles();
  const { isModalOpen, openModal, setModalId } = useGlobalContext();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (i) => {
    openModal();
    setModalId(i);
  };
  return (
    <section className={classes.projects} id="projects">
      <Container className={classes.bigCont}>
        {/* Title */}
        <Typography align="center" className={classes.title}>
          Projects
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline} />
        </Box>
        <Box className={classes.center}>
          <Box className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="secondary"
              scrollButtons="auto"
            >
              <Tab label="ALL" {...a11yProps(0)} />
              <Tab label="REACT-JS" {...a11yProps(1)} />
              <Tab label="JAVASCRIPT" {...a11yProps(2)} />
            </Tabs>
            <Modal />
            <TabPanel value={value} index={0}>
              <Grid container className={classes.gridCont}>
                {webData.map((items, ind) => {
                  const { image, name, program } = items;
                  return (
                    <Grid item className={classes.gridItem} key={ind}>
                      <Box className={classes.webBack}>
                        <Box className={classes.textBack}>
                          <Typography className={classes.textTitle}>
                            {name}
                          </Typography>
                          <Typography className={classes.textSubTitle}>
                            {program}
                          </Typography>
                          <Button
                            className={classes.btnHov}
                            onClick={() => handleClick(ind)}
                          >
                            Learn More
                          </Button>
                        </Box>
                        <img
                          src={image}
                          alt={name}
                          className={classes.webImg}
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container className={classes.gridCont}>
                {webData.map((item) => {
                  const { image, name, id, program } = item;
                  if (id <= 6) {
                    return (
                      <Grid item className={classes.gridItem} key={id}>
                        <Box className={classes.webBack}>
                          <Box className={classes.textBack}>
                            <Typography className={classes.textTitle}>
                              {name}
                            </Typography>
                            <Typography className={classes.textSubTitle}>
                              {program}
                            </Typography>
                            <Button
                              className={classes.btnHov}
                              onClick={openModal}
                            >
                              Learn More
                            </Button>
                          </Box>
                          <img
                            src={image}
                            alt={name}
                            className={classes.webImg}
                          />
                        </Box>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container className={classes.gridCont}>
                {webData.map((item) => {
                  const { image, name, id, program } = item;
                  if (id > 6) {
                    return (
                      <Grid item className={classes.gridItem} key={id}>
                        <Box className={classes.webBack}>
                          <Box className={classes.textBack}>
                            <Typography className={classes.textTitle}>
                              {name}
                            </Typography>
                            <Typography className={classes.textSubTitle}>
                              {program}
                            </Typography>
                            <Button
                              className={classes.btnHov}
                              onClick={openModal}
                            >
                              Learn More
                            </Button>
                          </Box>
                          <img
                            src={image}
                            alt={name}
                            className={classes.webImg}
                          />
                        </Box>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
