import React from "react";

import "./styles/Contributions.scss";

export default function Contributions() {
  return (
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Start</span>
      </header>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">January 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">January 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-primary">2017</span>
      </header>
      <div class="timeline-item is-primary">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading">January 2016</p>
          <p>Timeline content - Can include any HTML element</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-primary">End</span>
      </header>
    </div>
  );
}
