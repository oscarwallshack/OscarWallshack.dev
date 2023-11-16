import React from "react";
import classes from "./Introduce.module.scss";

const Introduce = () => {
  const codingSkills = [
    "React.js",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Bootstrap 5",
    "Laravel 8",
    "PHP",
    "HTML",
    "CSS/SCSS",
  ];

  const seoSkills = [
    "Website analysis",
    "Keyword research",
    "Page optimization",
    "Preparing reports",
    "Google Search Console",
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Data Studio",
    "Looker Studio",
    "Ahrefs",
    "Semstorm",
  ];

  const cms = [
    "WordPress",
    "Woocomerce",
    "Prestashop",
    "Shoper",
    "ShopGold",
    "SkyShop",
  ];

  const codingList = codingSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));
  const seoList = seoSkills.map((skill, index) => <li key={index}>{skill}</li>);
  const cmsList = cms.map((cms, index) => <li key={index}>{cms}</li>);

  return (
    <section id="about-me" className={classes.introduce}>
      <div className={classes.introduce__aboutMe}>
        <div className={classes.description}>
          <div className={classes.prof}></div>
          <div>
            <p>
              My name is Bartek, and currently, I work as a{" "}
              <span>Full Stack Developer.</span> My responsibilities include
              maintaining and expanding an online store and developing a
              configurator for photovoltaic installations. Previously, I worked
              as an <span>SEO Specialist</span>, assisting clients in achieving their
              business goals by optimizing their websites for the Google search
              engine. 
              </p>
              <p>My professional goal is to code complete systems and web
              applications.</p>
          
          </div>
        </div>
      </div>

      <div className={classes.introduce__skills}>
        <span>
          <h3>Coding Skills {`</>`}</h3>
          <ul>{codingList}</ul>
        </span>
        <span>
          <h3>SEO Skills & Tools</h3>
          <ul>{seoList}</ul>
        </span>
        <span>
          <h3>Known CMS's</h3>
          <ul>{cmsList}</ul>
        </span>
      </div>
    </section>
  );
};

export default Introduce;
