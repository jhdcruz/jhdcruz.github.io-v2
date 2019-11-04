import React from "dependency/react";
import ReactDOM from "dependency/react-dom";

import "./index.scss";
import BgParticles from "components/BgParticles";
import Navigation from "components/Navigation";
import Introduction from "components/Introduction";
import Footer from "components/Footer";

ReactDOM.render(
  <div className="Wrapper">
    <BgParticles />
    <Navigation />
    <Introduction />
    <Footer />
  </div>,
  document.getElementById("root")
);
