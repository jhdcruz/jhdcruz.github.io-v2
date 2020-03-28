import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled from "styled-components";
import aboutData from "./json/about.data.json";

// * Skill Section
const Skillset = styled.div`
  color: white;
  margin: 8px auto;
  padding: 0 5rem;
  text-align: justify;
`;

export default function SkillSets() {
  return (
    <Skillset className="columns is-gapless">
      {/* Front-End */}
      <div className="column is-one-quarter">
        <h5>
          <i className="fas fa-bookmark" /> Front-end
        </h5>
        <ul>
          {aboutData.Skills.FrontEnd.map(fe => (
            <li>
              <i className="fas fa-angle-right" /> {fe}
            </li>
          ))}
        </ul>
      </div>

      {/* Design */}
      <div className="column is-one-quarter">
        <h5>
          <i className="fas fa-bookmark" /> Design
        </h5>
        <ul>
          {aboutData.Skills.Design.map(des => (
            <li>
              <i className="fas fa-angle-right" /> {des}
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="column is-one-quarter">
        <h5>
          <i className="fas fa-bookmark" /> Services
        </h5>
        <ul>
          {aboutData.Skills.Services.map(svc => (
            <li>
              <i className="fas fa-angle-right" /> {svc}
            </li>
          ))}
        </ul>
      </div>

      {/* Others */}
      <div className="column is-one-quarter">
        <h5>
          <i className="fas fa-bookmark" /> Others
        </h5>
        <ul>
          {aboutData.Skills.Others.map(oth => (
            <li>
              <i className="fas fa-angle-right" /> {oth}
            </li>
          ))}
        </ul>
      </div>
    </Skillset>
  );
}
