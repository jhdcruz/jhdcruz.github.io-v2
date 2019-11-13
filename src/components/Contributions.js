import React from "react";

import "dependency/bulma-timeline/dist/css/bulma-timeline.min.css";
import "./styles/Contributions.scss";

import contribution from "../assets/json/contributions.json";

export default function Contributions() {
  return (
    <div id="contributions">
      <h2 className="has-text-centered">Recent Contributions</h2>
      <hr />
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-link">2019</span>
        </header>
        <div className="timeline-item is-link">
          <div className="timeline-marker is-info is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading right">{contribution.y2019.date}</p>
            <p>
              <a href={contribution.y2019.repo_link}>
                {contribution.y2019.repo} |{" "}
              </a>
              <a href={contribution.y2019.pr_link}>
                {contribution.y2019.title}
              </a>
            </p>
          </div>
        </div>
        {/* <header className="timeline-header">
          <span className="tag is-link">2017</span>
        </header>
        <div className="timeline-item is-link">
          <div className="timeline-marker is-info"></div>
          <div className="timeline-content">
            <p className="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <div className="timeline-item is-link">
          <div className="timeline-marker is-info is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading right">January 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div> */}
        <header className="timeline-header">
          <span className="tag is-medium is-link">...</span>
        </header>
      </div>
    </div>
  );
}
