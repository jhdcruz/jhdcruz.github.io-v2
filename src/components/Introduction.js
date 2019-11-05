import React from "react";

import "animate.css";
import "./Introduction.scss";

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
        <button class="button is-white is-outlined">
          Projects / Contributions
        </button>
        <button class="button is-white is-outlined">Contact</button>
      </div>
    </div>
  );
}

export default Introduction;
