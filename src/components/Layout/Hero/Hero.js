import React from "react";
import { Fragment } from "react";
import Button from "../../UI/Button/Button";
import classes from "./Hero.module.scss";
import donutImage from "../../../assets/donut.png";
import HeroBackground from "./HeroBackground";
import Slider from "./Slider/Slider";

const Hero = ({ onShowContactDetails }) => {
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
          <Button text="Contact me" onClick={onShowContactDetails} />
        </div>
        <div>
          <Slider />
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
