import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config.json";

import "./BgParticles.scss";

export default function bgParticles() {
  return (
    <Particles
      canvasClassName="particle-bg"
      className="bgparticles"
      params={particlesConfig}
    />
  );
}
