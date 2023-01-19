import React from "react";
import Button from "../UI/Button";
import classes from "./Hero.module.scss";



const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__intro}>
        <h1>Frontend developer | SEO Specialist</h1>
        <p>gic /p>
        <Button text="Contact me" />
      </div>
      <div className={classes.hero__projects}></div>
    </section>
  );
};

export default Hero;
