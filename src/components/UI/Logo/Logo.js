import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={classes.logo}>
      OscarWallshack
    </Link>
  );
};

export default Logo;
