import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useGlobalContext } from "../../contextApi";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { webData } from "../../data/webData";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import useStyles from "./style";
import ClearIcon from "@material-ui/icons/Clear";
export default function TransitionsModal() {
  const [value, setValue] = useState(0);
  const { modalId, closeModal, isModalOpen } = useGlobalContext();
  const classes = useStyles();

  const { name, program, images, about } = webData[modalId];
  console.log(images);
  const webImg = images[value];
  console.log(value);
  const checkNumber = (number) => {
    const lastNum = images.length - 1;
    if (number > lastNum) {
      return 0;
    }
    if (number < 0) {
      return lastNum;
    }
    return number;
  };
  const nextImage = () => {
    setValue((value) => {
      let newIndex = value + 1;
      return checkNumber(newIndex);
    });
  };
  const prevImage = () => {
    setValue((value) => {
      let newIndex = value - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Paper className={classes.paper}>
            <Box className={classes.imgsBox}>
              <img src={webImg} alt="crypto" className={classes.imgs} />
              <NavigateBeforeIcon
                className={classes.beforeIcon}
                onClick={prevImage}
              />
              <NavigateNextIcon
                className={classes.afterIcon}
                onClick={nextImage}
              />
            </Box>
            <Container className={classes.depthCont}>
              <Typography className={classes.webTitle}>{name}</Typography>
              <Typography className={classes.webSubTitle}>{program}</Typography>
              <Typography className={classes.webAbout}>{about}</Typography>
              <Box className={classes.btnBox}>
                <Button variant="contained" className={classes.btnMore}>
                  <OpenInNewIcon className={classes.btnIcon} /> View Site
                </Button>
                <ClearIcon
                  className={classes.leavingIcon}
                  onClick={closeModal}
                />
              </Box>
            </Container>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
