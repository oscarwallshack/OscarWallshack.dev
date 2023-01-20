import React from "react";
import Button from "../UI/Button";
import classes from "./Hero.module.scss";
import astronautImage from "../../assets/astronautt.png";
import autoDetailingImage from "../../assets/Auto-detailing-website.webp";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.hero__intro}>
        <h1>Frontend developer | SEO Specialist</h1>
        <p>Coś tam o mnie</p>
        <Button text="Contact me" />
      </div>
      <div className={classes.hero__projects}>
        <div>
          <img
            src={autoDetailingImage}
            alt="Auto Detailing website"
            className={classes.projects}
          />
         
        </div>
      </div>
      <img
        src={astronautImage}
        alt="astronaut"
        className={classes.hero__astronaut}
      />
    </section>
  );
};

export default Hero;
