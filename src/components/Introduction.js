import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./styles/Introduction.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Projects from "components/Projects";
import Contact from "components/Contact";

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
            <NavLink to="/projects" className="button is-outlined">
              <i className="fab fa-git-alt" />
              Projects & Contributions
            </NavLink>
            <NavLink to="/contact" className="button is-outlined">
              <i className="fas fa-envelope" />
              Contact
            </NavLink>
          </div>
        </div>
        <div className="mainContent">
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}
