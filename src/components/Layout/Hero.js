import React from "react";
import Button from "../UI/Button";
import classes from "./Hero.module.scss";



const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__intro}>
        <h1>OscarWallshacka</h1>
        <p>Coś tam o mnie</p>
        <Button text="Contact me" />
      </div>
      <div className={classes.hero__projects}></div>
    </section>
  );
};

export default Hero;
