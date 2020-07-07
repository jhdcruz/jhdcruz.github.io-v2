import React from 'react';
import 'dependency/bulma/css/bulma.min.css';
import styled from 'styled-components';
import 'dependency/@fortawesome/fontawesome-free/css/all.min.css';

// * Component Imports
import ProjectCard from 'components/projectCard';
import projectList from 'components/json/projects.data';

const ContentWrapper = styled.div`
  margin: 3vh auto;
  padding: 1rem 3rem;
`;

const Title = styled.h2`
  color: white;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`;

const ProjectContainer = styled.div`
  margin: 8px auto;
  padding: 0.9rem auto !important;
`;

/*
 ! Assigned Props:
 *  - id
 *  - icon
 *  - title
 *  - description
 *  - category
 *  - link
 *  - preview
 */

function ProjectList() {
  return (
    <>
      {projectList.projects.map((project) => (
        <ProjectCard
          key={project.key}
          icon={project.icon}
          title={project.title}
          description={project.description}
          category={project.category}
          link={project.link}
          preview={project.preview}
        />
      ))}
    </>
  );
}

export default function Projects() {
  return (
    <ContentWrapper className="hero-body">
      <Title>Projects</Title>
      <hr />
      <ProjectContainer className="columns">
        <ProjectList />
      </ProjectContainer>
      <hr />
    </ContentWrapper>
  );
}
