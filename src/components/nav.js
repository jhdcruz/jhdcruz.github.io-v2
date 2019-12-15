import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

// * Components Import
import pageLink from "./pageLink";

export const NavStyles = createGlobalStyle`
  .navbar-end {
    color: whitesmoke;
    font-size: 12.8px;
    text-transform: uppercase;
    letter-spacing: 1.4px;

  }
`;

export const NavBar = styled.nav`
  margin-bottom: 30px;

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
`;

export const NavLeft = styled.div`
  margin-right: 135px;
`;

export const WebBrand = styled.li`
  margin-left: 100px;
`;

export const NavRight = styled.div`
  margin-right: 125px;

  .navbar-item {
    color: white;

    :hover,
    .active {
      border-top: 2px solid #b5b5b5;
    }
  }

  .active {
    border-top: 2px solid #eeeeee;
    color: #3273dc;
  }
`;

export default function Nav() {
  // ? Hamburger Menu toggler
  function navActive() {
    const navBurger = document.querySelector(".navbar-burger");
    const navMenu = document.querySelector(".navbar-menu");

    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }

  return (
    <NavBar
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <NavStyles />
      {/* Website Brand | Home */}
      <NavLeft className="navbar-brand">
        <WebBrand className="navbar-item branding">
          <NavLink to="/">
            <img src={brand} alt="H E R O" width="85" height="auto" />
          </NavLink>
        </WebBrand>

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
      </NavLeft>

      {/* Router Links */}
      <div className="navbar-menu">
        <NavRight className="navbar-end">
          <pageLink page="/projects" style="navbar-item" name="Projects" />
          <pageLink page="/about" style="navbar-item" name="About" />
        </NavRight>
      </div>
    </NavBar>
  );
}
