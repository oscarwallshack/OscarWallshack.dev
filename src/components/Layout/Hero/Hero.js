import React from "react";
import Button from "../../UI/Button";
import classes from "./Hero.module.scss";
import donutImage from "../../../assets/donut.png";
import autoDetailingImage from "../../../assets/Auto-detailing-website.webp";
import test from "../../../assets/test.png";
import HeroBackground from "./HeroBackground";
import { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <HeroBackground />
      <section className={classes.hero}>
        <div className={classes.hero__intro}>
          <h2>Hello world!</h2>
          <p>I'm Bartek, </p>
          <h1>
            <span>Frontend</span> developer & <span>SEO</span> Specialist
          </h1>
          <Button text="Contact me" />
        </div>
        <div className={classes.hero__projects}>
          <div>
            <img
              src={autoDetailingImage}
              alt="Auto Detailing website"
              className={classes.projects}
            />
            <img
              src={test}
              alt="Auto Detailing website"
              className={classes.projects}
            />
          </div>
        </div>
        <img
          src={donutImage}
          alt="donut in space"
          className={classes.hero__donut}
        />
      </section>
    </Fragment>
  );
};

export default Hero;
