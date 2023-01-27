import React from "react";
import classes from "./Project.module.scss";
import Tech from "./Tech";

const Project = (props) => {
  return (
    <div className={classes.project}>
      <div className={classes.project__heading}>
        <h4>DevJobler</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          suscipit ex.
        </p>
      </div>
      <div className={classes.project__content}>
        <div>
          <Tech />
        </div>
        <div>
          <a href="#">Check out</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
