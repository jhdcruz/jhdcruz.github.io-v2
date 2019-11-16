// ! High Level imports
import React from "dependency/react";
import ReactDOM from "dependency/react-dom";

// * Components Import
import Wrapper from "components/Wrapper";
import BgParticles from "components/BgParticles/BgParticles";
import Footer from "components/Footer/Footer";

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
