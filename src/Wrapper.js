import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "dependency/bulma/css/bulma.min.css";

// * Components Import
import Intro from "components/Introduction";
import Projects from "components/Projects";
import Contribution from "components/Contributions";
import About from "components/About";
import Contact from "components/Contact";

// * Assets Imports
import "./Wrapper.scss";
import brand from "images/HERO.svg";

export default function Wrapper() {
  // Hamburger Menu toggler
  function navActive() {
    const navBurger = document.querySelector(".navbar-burger");
    const navMenu = document.querySelector(".navbar-menu");

    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <div className="hero-head">
      <HashRouter>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          {/* Website Brand | Home */}
          <div className="navbar-brand">
            <li className="navbar-item branding">
              <NavLink to="/">
                <img src={brand} alt="H E R O" width="85" height="auto" />
              </NavLink>
            </li>

            {/* Hamburger Menu */}
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={navActive}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          {/* Router Links */}
          <div className="navbar-menu">
            <div className="navbar-end">
              <NavLink to="/projects" className="navbar-item">
                Projects
              </NavLink>
              <NavLink to="/about" className="navbar-item">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-item">
                Contact
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Router Content */}
        <div className="mainContent">
          <Route exact path="/" component={Intro} />
          <Route path="/projects" component={Projects} />
          <Route path="/contributions" component={Contribution} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    </div>
  );
}
