import React, {Component} from "react";

import "./styles/Introduction.scss";

export default class Introduction extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Front-End Web Development</h1>
          <h2 className="subtitle">
            Duis cillum cillum voluptate voluptate minim proident fugiat
            deserunt anim fugiat reprehenderit.
          </h2>
          <div className="field is-grouped">
            <a
              href="#projects"
              className="button is-outlined"
            >
              <i className="fab fa-git-alt"/>
              Projects & Contributions
            </a>
            <a
              href="#contact"
              className="button is-outlined"
            >
              <i className="fas fa-envelope"/>
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
