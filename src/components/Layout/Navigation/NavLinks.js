import React from "react";
import classes from "./NavLinks.module.css";

const NavLink = (props) => {
  return (
    <ul className={classes.nav_links}>
      {props.links.map((link) => (
        <li className={classes.nav_link} key={link.id}>
          <a href={link.link}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
