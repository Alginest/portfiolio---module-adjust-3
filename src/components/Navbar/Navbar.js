import { AppBar, Container, Link, Toolbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import { useGlobalContext } from "../../contextApi";
import MobileNav from "../Mobile/MobileNav/MobileNav";
const Navbar = () => {
  const { openMenu, openToggle } = useGlobalContext();
  const [position, setPosition] = useState("static");
  const classes = useStyles(openMenu);

  const changePosition = () => {
    let windowY = window.scrollY;
    if (windowY <= 1000) {
      setPosition("static");
    }
    if (windowY >= 1050) {
      setPosition("fixed");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changePosition);

    return () => {
      window.removeEventListener("scroll", changePosition);
    };
  }, [position]);

  return (
    <div className={classes.navbar}>
      <AppBar className={classes.appBar} position={position} elevation={0}>
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolBar}>
            <li className={classes.li}>
              <Link className={classes.link} href="#header">
                Home
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link} href="#about">
                About
              </Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Portfolio</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Blog</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Contact</Link>
            </li>
          </Toolbar>
          <MenuIcon
            onClick={openToggle}
            className={
              openMenu
                ? `${classes.faBars} ${classes.faBarsActive}`
                : classes.faBars
            }
          />
        </Container>
        <MobileNav />
      </AppBar>
    </div>
  );
};

export default Navbar;
