import React from "react";

import "animate.css";
import "./Footer.scss";

function Footer() {
  return (
    <div className="hero-footer">
      <div className="container has-text-centered">
        <a
          href="https://github.com/jhdcruz/jhdcruz.github.io"
          className="gh-redirect animated fadeIn slower delay-1s"
        >
          <p>Copyright &copy; 2019 | Joshua Hero Dela Cruz</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
