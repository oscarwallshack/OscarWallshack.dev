import React, { useState } from "react";

import classes from "./Teaser.module.scss";
import glitchProfile from "../../../assets/prof_glitch.webp";
import profile from "../../../assets/prof.webp";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const Teaser = () => {
  const [profileImg, setProfileImg] = useState(glitchProfile);

  const handleMouseOver = () => {
    setProfileImg(profile);
  };

  const handleMouseOut = () => {
    setProfileImg(glitchProfile);
  };

  return (
    <section className={classes.teaser}>
      <div>
        <h2>More about me</h2>
        <Link to={"/about-me"}>
          <Button text="About me" />
        </Link>
      </div>
      <img
        src={profileImg}
        alt="profile"
        className={classes.prof}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </section>
  );
};

export default Teaser;
