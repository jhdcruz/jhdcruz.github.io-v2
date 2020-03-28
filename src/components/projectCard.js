import React from "react";
import styled from "styled-components";

// * Component Styles
const Card = styled.div`
  vertical-align: middle;
  background-color: transparent;
  margin: 0 auto;
  flex-grow: 0;
  flex-basis: auto;
`;

const CardContent = styled.div`
  padding: 1.3rem 2rem;
`;

const CardHeading = styled.div`
  margin-bottom: 0.8rem !important;
  align-items: center;
`;

const Icon = styled.img`
  border-radius: 25%;
`;

const ProjectTitle = styled.h4`
  text-transform: uppercase;
  font-size: 17.6px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #fff;
`;

const ProjectContent = styled.div`
  color: #ececec;
  font-weight: 300;
  margin-bottom: 1rem !important;
`;

const ProjectLabel = styled.label`
  color: #8f8f8fd0;
  font-weight: 600;
  font-style: italic;
`;

/*
 ! Props:
 *  - id
 *  - icon
 *  - title
 *  - description
 *  - category
 *  - link
 *  - preview
 */

function ProjectCard(props) {
  return (
    <Card className="card column" key={props.key}>
      <CardContent className="card-content">
        <CardHeading className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <Icon src={props.icon} />
            </figure>
          </div>
          <div className="media-content">
            <ProjectTitle className="title">{props.title}</ProjectTitle>
          </div>
        </CardHeading>

        <ProjectContent>{props.description}</ProjectContent>
        <ProjectLabel className="label">{props.category}</ProjectLabel>

        <div className="field is-grouped">
          <a
            href={props.link}
            className="button is-outlined redirect"
            id="Link"
          >
            <i className="fas fa-code-branch" />
            Source
          </a>
          {props.preview != null && (
            <a
              href={props.preview}
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
  );
}

export default ProjectCard;
