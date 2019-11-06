import React, { Component } from "react";

import "./styles/Projects.scss";
import projects from "../assets/json/projects.json";

export default class Projects extends Component {
  render() {
    return (
      <div className="ContentWrapper">
        <h2 className="has-text-centered">Projects</h2>
        <hr />
        <div className="ProjectsList columns" id="projects">
          <div className="card column">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img className="Icon" src={projects.about_me.icon} />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{projects.about_me.title}</p>
                </div>
              </div>

              <div className="content">{projects.about_me.description}</div>

              <div className="field is-grouped">
                <a
                  href={projects.about_me.link}
                  className="button is-outlined redirect"
                  id="Link"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="card column">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      className="Icon"
                      src={projects.desktop_messenger.icon}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">
                    {projects.desktop_messenger.title}
                  </p>
                </div>
              </div>

              <div className="content">
                {projects.desktop_messenger.description}
              </div>

              <div className="field is-grouped">
                <a
                  href={projects.desktop_messenger.link}
                  className="button is-outlined redirect"
                  id="Link"
                >
                  Source
                </a>
              </div>
            </div>
          </div>

          <div className="card column">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      className="Icon"
                      src={projects.desktop_messages.icon}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">
                    {projects.desktop_messages.title}
                  </p>
                </div>
              </div>

              <div className="content">
                {projects.desktop_messages.description}
              </div>

              <div className="field is-grouped">
                <a
                  href={projects.desktop_messages.link}
                  className="button is-outlined redirect"
                  id="Link"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
