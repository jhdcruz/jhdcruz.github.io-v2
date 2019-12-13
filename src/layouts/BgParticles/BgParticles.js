import React from "react";

import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config.json";

import { createGlobalStyle } from "styled-components";

export const ParticlesBg = createGlobalStyle`
  canvas,
  .particle-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 98.8% !important;
    height: 100% !important;
    opacity: 0.85;
    overflow: hidden !important;
    z-index: 0;
  }
`;

export default function bgParticles() {
  return (
    <>
      <ParticlesBg />
      <Particles
        canvasClassName="particle-bg"
        className="bgparticles"
        params={particlesConfig}
      />
    </>
  );
}
