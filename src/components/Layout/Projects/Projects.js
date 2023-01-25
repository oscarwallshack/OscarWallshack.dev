import React from "react";
import Project from "./Project";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.projects}>
      <div className={classes.projects__header}>
        <h2>Selected projects</h2>
        <p>Something something</p>
      </div>
      <div className={classes.projects__boxes}>>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
