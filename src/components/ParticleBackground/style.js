import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    height: 1000,
    width: "100%",
    position: "relative",
  },
  flex: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
