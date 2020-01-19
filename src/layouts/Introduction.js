import React from "react";
import { Route } from "react-router-dom";
import Projects from "layouts/Projects/Projects";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";

// * Component Imports
import PageLink from "components/pageLink";

// * Component Style
const ContentWrapper = styled.div`
  padding: 2rem 1.5rem;
  margin: 17.4vh 7.2vw;
`;

const Welcome = styled.h5`
  color: #b4b4b4;
  font-weight: 300;
  margin: 0 0 4px 0;
  font-size: 16px;
`;

const Title = styled.h3`
  font-weight: 600;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 51px;
  line-height: 1.1;
`;

const Subtitle = styled.h6`
  color: #b4b4b4;
  font-weight: 400;
  margin: 4.5px 0 16px 0;
`;

function Profession() {
  return (
    <Title className="header">A Front-End Web Developer & Designer.</Title>
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
    <PageLink
      page="/projects"
      style="button is-outlined"
      icon="fab fa-git-alt"
      name="My Projects"
    />
  );
}

function ContactButton() {
  return (
    <a href="mailto:jhdcruz@vivaldi.net" className="button is-outlined">
      <i className="fas fa-envelope" /> Contact me
    </a>
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
      </div>
    </ContentWrapper>
  );
}
