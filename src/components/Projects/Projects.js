import React from "react";
import "dependency/bulma/css/bulma.min.css";

import projects from "./data";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  ContentWrapper,
  Title,
  Line,
  ProjectsList,
  Card,
  CardContent,
  CardHeading,
  Icon,
  ProjectTitle,
  ProjectContent,
  ProjectLabel
} from "./Projects.styled";

export default function Projects() {
  return (
    <ContentWrapper className=" hero-body">
      <Title>Projects</Title>
      <Line />
      <ProjectsList className="columns">
        {projects.map(project => (
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
        <hr />
      </ProjectsList>
    </ContentWrapper>
  );
}
