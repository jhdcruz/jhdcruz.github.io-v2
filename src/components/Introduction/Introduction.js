import React from "react";
import {NavLink, Route} from "react-router-dom";
// noinspection NpmUsedModulesInstalled
import Projects from "components/Projects/Projects";
// noinspection NpmUsedModulesInstalled
import Contact from "components/Contact/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {ContentWrapper, Profession, Subtitle, Welcome} from "./Introduction.styled";

export default function Introduction() {
  return (
    <ContentWrapper className="hero-body">
      <div className="container">
        <Welcome className="identity">Hello there, I'm Joshua Hero,</Welcome>
        <Profession className="header">
          A Front-End Web Developer & Designer.
        </Profession>
        <Subtitle className="subtitle">
          A passionate web developer of hiqh-quality, modern & elegant web
          designs.
        </Subtitle>
        <div className="field is-grouped">
          <NavLink to="/projects" className="button is-outlined">
            <i className="fab fa-git-alt" />
            My Projects
          </NavLink>
          <NavLink to="/contact" className="button is-outlined">
            <i className="fas fa-envelope" />
            Contact me
          </NavLink>
        </div>
      </div>
      <div className="mainContent">
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </ContentWrapper>
  );
}
