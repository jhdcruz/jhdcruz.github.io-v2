import React, { Component } from "react";

import Particles from "react-particles-js";
import particlesConfig from "config/particlesjs-config.json";

import "./styles/BgParticles.scss";

function bgParticles() {
  return (
    <Particles
      className="particles-container"
      canvasClassName="particle-bg"
      className="bgparticles"
      params={particlesConfig}
    />
  );
}

export default bgParticles;
