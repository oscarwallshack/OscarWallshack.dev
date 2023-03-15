import React, { useState } from "react";
import Logo from "../../UI/Logo/Logo";
import { useLocation } from "react-router-dom";

import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss";
import MainNavigation from "../MainNavigation/MainNavigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const body = document.querySelector("body");
  body.style.overflow = menuOpen ? "hidden" : "auto";
  
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  const location = useLocation();
  let styles = location.pathname === "/" ? { background: "none" } : {};

  return (
    <header className={classes.header} style={styles}>
      <Logo />
      <MainNavigation />
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <MainNavigation isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
};

export default Header;
