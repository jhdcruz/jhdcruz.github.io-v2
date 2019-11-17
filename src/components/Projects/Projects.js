import React from "react";
import "dependency/bulma/css/bulma.min.css";

import "./Projects.scss";
import projects from "./data";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Projects() {
  return (
    <div className="ContentWrapper hero-body" id="projects">
      <h2 className="has-text-centered">Projects</h2>
      <hr />
      <div className="ProjectsList columns">
        {projects.map(project => (
          <div className="card column" id={project.id}>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img className="Icon" src={project.icon} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{project.title}</p>
                </div>
              </div>

              <div className="content">{project.description}</div>
              <label className="label">{project.category}</label>

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
            </div>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}
