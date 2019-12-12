import React from "react";
import "dependency/bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  Card,
  CardContent,
  CardHeading,
  ContentWrapper,
  Icon,
  ProjectContainer,
  ProjectContent,
  ProjectLabel,
  ProjectTitle,
  Title
} from "./Projects.styled";

import projectList from "./projects.data";

function ProjectList() {
  return (
    <>
      {projectList.projects.map(project => (
        <Card className="card column" key={project.id}>
          <CardContent className="card-content">
            <CardHeading className="media">
              <div className="media-left">
                <figure className="image is-32x32">
                  <Icon src={project.icon} />
                </figure>
              </div>
              <div className="media-content">
                <ProjectTitle className="title">{project.title}</ProjectTitle>
              </div>
            </CardHeading>

            <ProjectContent>{project.description}</ProjectContent>
            <ProjectLabel className="label">{project.category}</ProjectLabel>

            <div className="field is-grouped">
              <a
                href={project.link}
                className="button is-outlined redirect"
                id="Link"
              >
                <i className="fas fa-code-branch" />
                Source
              </a>
              {project.preview != null && (
                <a
                  href={project.preview}
                  className="button is-outlined redirect"
                  id="Link"
                >
                  <i className="fas fa-globe" />
                  Preview
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default function Projects() {
  return (
    <ContentWrapper className=" hero-body">
      <Title>Projects</Title>
      <hr />
      <ProjectContainer className="columns">
        <ProjectList />
      </ProjectContainer>
      <hr />
    </ContentWrapper>
  );
}
