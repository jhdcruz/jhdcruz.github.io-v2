import React, { Component } from "react";
import "./styles/Navigation.scss";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/activity" activeClassName="active">
          Activity
        </NavLink>
        <NavLink to="/contacts" activeClassName="active">
          Contacts
        </NavLink>
      </div>
    );
  }
}
