import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled from "styled-components";
import aboutData from "./json/about.data.json";

// * Skill Section
const SkillsGrid = styled.div`
  width: 60%;
  margin: 4% 0;
`;

const SkillSet = styled.div`
  color: white;
  margin: 8px auto;
  width: 95%;
  margin-bottom: 10px;
  padding: 0 2.5%;
`;

const SkillHeader = styled.h4`
  font-size: 1.5rem;
`;

const SkillBlock = styled.div`
  margin: 5% 0;
`;

const SkillEntry = styled.li`
  font-size: 1.2rem;
`;

function FrontEnd() {
  return (
    <SkillBlock>
      <SkillHeader>
        <i className="fas fa-bookmark" /> Front-End
      </SkillHeader>
      <hr />
      <ul>
        {aboutData.Skills.FrontEnd.map(fe => (
          <SkillEntry>
            <i className="fas fa-angle-right" /> {fe}
          </SkillEntry>
        ))}
      </ul>
    </SkillBlock>
  );
}

function Design() {
  return (
    <SkillBlock>
      <SkillHeader>
        <i className="fas fa-bookmark" /> Design
      </SkillHeader>
      <hr />
      <ul>
        {aboutData.Skills.Design.map(des => (
          <SkillEntry>
            <i className="fas fa-angle-right" /> {des}
          </SkillEntry>
        ))}
      </ul>
    </SkillBlock>
  );
}

function Services() {
  return (
    <SkillBlock>
      <SkillHeader>
        <i className="fas fa-bookmark" /> Services
      </SkillHeader>
      <hr />
      <ul>
        {aboutData.Skills.Services.map(svc => (
          <SkillEntry>
            <i className="fas fa-angle-right" /> {svc}
          </SkillEntry>
        ))}
      </ul>
    </SkillBlock>
  );
}

function Others() {
  return (
    <SkillBlock>
      <SkillHeader>
        <i className="fas fa-bookmark" /> Others
      </SkillHeader>
      <hr />
      <ul>
        {aboutData.Skills.Others.map(oth => (
          <SkillEntry>
            <i className="fas fa-angle-right" /> {oth}
          </SkillEntry>
        ))}
      </ul>
    </SkillBlock>
  );
}

export default function SkillSets() {
  return (
    <SkillsGrid className="columns">
      <SkillSet className="column is-half">
        <FrontEnd />
        <Design />
      </SkillSet>
      <SkillSet className="column is-half">
        <Services />
        <Others />
      </SkillSet>
    </SkillsGrid>
  );
}
