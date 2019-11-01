import React from "react";
import "depedency/react-bulma-components/dist/react-bulma-components.min.css";

import Navbar from "depedency/react-bulma-components";
import "./Navigation.scss";

function Navigation() {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="/">
          <img
            src="../assets/img/HERO.svg"
            alt="HERO"
            width="112"
            height="28"
          />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item href="/projects">Projects</Navbar.Item>
          <Navbar.Item href="/contacts">Contact</Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default Navigation;
