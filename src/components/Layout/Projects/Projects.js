import React from "react";
import Project from "./Project";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={classes.projects}>
      <div>
        <div className={classes.projects__header}>
          <h2>Selected projects</h2>
          <p>
            Visit my <a href="https://github.com/oscarwallshack">GitHub</a> to
            see more
          </p>
        </div>
        <div className={classes.projects__boxes}>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
};

export default Projects;
