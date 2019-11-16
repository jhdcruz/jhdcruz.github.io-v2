import React from "react";
import "dependency/bulma/css/bulma.min.css";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="hero-footer">
      <a
        href="https://github.com/jhdcruz/jhdcruz.github.io"
        className="gh-redirect"
      >
        Copyright &copy; 2019 | Joshua Hero Dela Cruz
      </a>
    </div>
  );
}
