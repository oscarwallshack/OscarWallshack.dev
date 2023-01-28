import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo />
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
