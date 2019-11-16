import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import "dependency/bulma/css/bulma.min.css";

// * Components Import
import Intro from "components/Introduction/Introduction";
import Projects from "components/Projects/Projects";
import About from "components/About/About";
import Contact from "components/Contact/Contact";

// * Assets Imports
import "./Wrapper.scss";
import brand from "images/HERO.svg";

// ? Hamburger Menu toggler
function navActive() {
  const navBurger = document.querySelector(".navbar-burger");
  const navMenu = document.querySelector(".navbar-menu");

  navBurger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
}

// ? Map the props
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// ? wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 360,
    damping: 65
  });
}

const bounceTransition = {
  // ? tart in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // ? leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // ? and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

export default function Wrapper() {
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

        {/* Router Container */}
        <div className="routerContainer">
          {/* Router Transition */}
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="routerContent"
          >
            {/* Router Contents */}
            <Route exact path="/" component={Intro} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </AnimatedSwitch>
        </div>
      </HashRouter>
    </div>
  );
}
