import React from "react";

import "animate.css";
import "./styles/Introduction.scss";

function Introduction() {
  return (
    <div className="hero-body">
      <div className="container">
        <h1 className="title animated fadeIn slow">
          Front-End Web Development
        </h1>
        <h2 className="subtitle animated fadeIn slower">
          Duis cillum cillum voluptate voluptate minim proident fugiat deserunt
          anim fugiat reprehenderit.
        </h2>
        <div className="field is-grouped">
          <a href="#projects" className="button is-outlined">
            <i className="fab fa-git-alt"></i>
            Projects & Contributions
          </a>
          <a href="#contact" className="button is-outlined">
            <i className="fas fa-envelope"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
