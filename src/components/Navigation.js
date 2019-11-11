import React from "react";
import "bulma/css/bulma.min.css";

import brand from "images/HERO.svg";
import "./styles/Navigation.scss";

export default function Navigation() {
  function navActive() {
    const navBurger = document.querySelector(".navbar-burger");
    const navMenu = document.querySelector(".navbar-menu");

    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <div className="hero-head">
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item branding" href="/">
            <img src={brand} alt="H E R O" width="85" height="auto" />
          </a>

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

        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="#projects" className="navbar-item">
              Projects
            </a>
            <a href="#contributions" className="navbar-item">
              Contributions
            </a>
            <a href="#contacts" className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
