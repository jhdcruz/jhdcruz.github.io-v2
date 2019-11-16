// ! High Level imports
import React from "dependency/react";
import ReactDOM from "dependency/react-dom";

// * Components Import
import Wrapper from "./Wrapper";
import BgParticles from "components/BgParticles";
import Footer from "components/Footer";

// * Assets Import
import "./index.scss";

ReactDOM.render(
  <>
    <BgParticles />
    <div id="mainContent">
      <Wrapper />
      <Footer />
    </div>
  </>,
  document.getElementById("root")
);
