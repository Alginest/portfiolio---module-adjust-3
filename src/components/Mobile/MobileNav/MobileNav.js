import { Link } from "@material-ui/core";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../contextApi";
import useStyles from "./style";
const MobileNav = () => {
  const { openMenu, setOpenMenu } = useGlobalContext();
  const classes = useStyles(openMenu);

  const changeMenu = () => {
    let width = window.innerWidth;
    if (width >= 600) {
      setOpenMenu(false);
    }
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  useEffect(() => {
    window.addEventListener("resize", changeMenu);
    return () => {
      window.removeEventListener("resize", changeMenu);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className={
        openMenu
          ? `${classes.mobileNav} ${classes.mobileNavActive}`
          : classes.mobileNav
      }
    >
      <ul className={classes.mobilePaw}>
        <li className={classes.mobileLi}>
          <Link
            className={classes.mobileLink}
            onClick={closeMenu}
            href="#header"
          >
            Home
          </Link>
        </li>
        <li className={classes.mobileLi}>
          <Link
            className={classes.mobileLink}
            href="#about"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Portfolio</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Blog</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Contact</Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
