import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "data/particlesjs-config.json";

import "./styles/BgParticles.scss";

export default function bgParticles() {
  return (
    <Particles
      canvasClassName="particle-bg"
      className="bgparticles"
      params={particlesConfig}
    />
  );
}
