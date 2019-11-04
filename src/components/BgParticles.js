import React, { Component } from "react";

import Particles from "react-particles-js";
import particlesConfig from "config/particlesjs-config.json";

import "./BgParticles.scss";

function bgParticles() {
  return (
    <Particles
      canvasClassName="particle-bg"
      height="100%"
      width="100%"
      className="particle-bg"
      params={particlesConfig}
    />
  );
}

export default bgParticles;
