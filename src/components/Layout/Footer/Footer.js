import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>OscarWallshack</h2>

      <div>
        <a target="_blank" href="https://github.com/oscarwallshack">
          GitHub
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bartosz-oskar-walczak/"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
