import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="contact" className={classes.footer}>
      <Logo />
      <div className={classes.contact}></div>
      <div className={classes.social}>
        <a target="_blank" href="https://github.com/oscarwallshack">
          GitHub
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bartosz-oskar-walczak/"
        >
          LinkedIn
        </a>
        <a href="mailto:bo.walczak@wp.pl">Mail</a>
      </div>
    </footer>
  );
};

export default Footer;
