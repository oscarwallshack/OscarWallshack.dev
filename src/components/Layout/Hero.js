import React from "react";
import Button from "../UI/Button";
import classes from "./Hero.module.scss";
import astronautImage from "../../assets/astronautt.png";


const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__intro}>
        <h1>Frontend developer | SEO Specialist</h1>
        <p>Coś tam o mnie</p>
        <Button text="Contact me" />
      </div>
      <img src={astronautImage} alt="astronaut" />
      <div className={classes.hero__projects}></div>

    </section>
  );
};

export default Hero;
