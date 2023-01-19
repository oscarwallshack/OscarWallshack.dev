import React, { useState } from "react";
import Logo from "../UI/Logo/Logo";

import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
