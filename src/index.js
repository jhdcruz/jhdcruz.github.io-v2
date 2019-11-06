import React from "dependency/react";
import ReactDOM from "dependency/react-dom";
import BgParticles from "components/BgParticles";
import Navigation from "components/Navigation";
import Introduction from "components/Introduction";
import Projects from "components/Projects";
import Footer from "components/Footer";

import "./index.scss";

ReactDOM.render(
  <div className="hero">
    <BgParticles />
    <div className="Wrapper">
      <Navigation />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  </div>,
  document.getElementById("root")
);
