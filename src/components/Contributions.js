import React from "react";

import "dependency/bulma-timeline/dist/css/bulma-timeline.min.css";
import "./styles/Contributions.scss";

export default function Contributions() {
  return (
    <div id="contributions">
      <h2 className="has-text-centered">Recent Contributions</h2>
      <hr />
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-link">LATEST</span>
        </header>
        <div className="timeline-item is-link">
          <div className="timeline-marker is-info is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading right">October 2019</p>
            <p>
              <a href="https://github.com/BoostIO/Boostnote">Boostnote | </a>
              <a href="https://github.com/BoostIO/Boostnote/pull/3243">
                Fix throwing of exception on multiple instances
              </a>
            </p>
          </div>
        </div>
        <header className="timeline-header">
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
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-link">...</span>
        </header>
      </div>
    </div>
  );
}
