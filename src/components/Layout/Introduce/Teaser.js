import React from "react";

import classes from "./Teaser.module.scss";
import profile from "../../../assets/prof_glitch.webp";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Teaser = () => {
  return (
    <section className={classes.teaser}>
        <div>
          <h2>More about me</h2>
          <Link to={"/about-me"}>
            <Button text="About me" />
          </Link>
        </div>
        <img src={profile} alt="profile" className={classes.prof} />
    </section>
  );
};

export default Teaser;
