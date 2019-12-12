import React from "react";
import { NavLink, Route } from "react-router-dom";
// noinspection NpmUsedModulesInstalled
import Projects from "components/Projects/Projects";
// noinspection NpmUsedModulesInstalled
import Contact from "components/Contact/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ContentWrapper, Subtitle, Title, Welcome } from "./Introduction.styled";

function Profession() {
  return (
    <Title className="header">
      A Front-End Web Developer & Designer.
    </Title>
  );
}

function SubTitle() {
  return (
    <Subtitle className="subtitle">
      A passionate web developer of minimalistic, modern & elegant web designs.
    </Subtitle>
  );
}

function Hello() {
  return <Welcome className="identity">Hello there, I'm Joshua Hero,</Welcome>;
}

function ProjectButton() {
  return (
    <NavLink to="/projects" className="button is-outlined">
      <i className="fab fa-git-alt" />
      My Projects
    </NavLink>
  );
}

function ContactButton() {
  return (
    <NavLink to="/contact" className="button is-outlined">
      <i className="fas fa-envelope" />
      Contact me
    </NavLink>
  );
}

export default function Introduction() {
  return (
    <ContentWrapper className="hero-body">
      <div className="container">
        <Hello />
        <Profession />
        <SubTitle />
        <div className="field is-grouped">
          <ProjectButton />
          <ContactButton />
        </div>
      </div>

      {/* Button Redirects/Routes */}
      <div className="mainContent">
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </ContentWrapper>
  );
}
