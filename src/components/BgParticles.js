import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "config/particlesjs-config.json";

import "./styles/BgParticles.scss";

function bgParticles() {
  return (
    <Particles
      canvasClassName="particle-bg"
      className="bgparticles"
      params={particlesConfig}
    />
  );
}

export default bgParticles;
