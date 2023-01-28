import React from "react";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "DevJobler",
      description: "Web App for job and employee search",
      tech: ["PHP", "Laravel 8", "Bootstrap 5"],
      link: "https://github.com/oscarwallshack/DevJobler",
    },
    {
      id: 2,
      name: "AutoDetailing-Website",
      description: "One page website promoting autodetailing services",
      tech: ["HTML", "CSS"],
      link: "https://github.com/oscarwallshack/AutoDetailing-Website",
    },
    {
      id: 3,
      name: "Effective Work",
      description: "Simple Pomodoro/Todo App",
      tech: ["Vanilla JS", "CSS", "HTML"],
      link: "https://github.com/oscarwallshack/Effective-work",
    },
  ];

  const projectList = projects.map((project) => (
    <ProjectItem
      id={project.id}
      projectName={project.name}
      projectDescription={project.description}
      projectTechs={project.tech}
      projectLink={project.link}
    />
  ));

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
        <div className={classes.projects__boxes}>{projectList}</div>
      </div>
    </section>
  );
};

export default Projects;
