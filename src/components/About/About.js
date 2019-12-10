import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// noinspection NpmUsedModulesInstalled
import { Bio, Name, PersonalTitle, Profile, ProfileContent, Skillset, Social } from "./About.styled";

import ProfileImg from "images/icon.png";
import Skills from "./about.data";

function SkillSets() {
  // Skills Data
  const frontEnd = Skills.FrontEnd;
  const design = Skills.Design;
  const services = Skills.Services;
  const others = Skills.Others;

  return <>
    <Skillset className="columns is-gapless">

      {/* Front-End */}
      <div className="column is-one-quarter">
        <h5><i className="fas fa-bookmark"/> Front-end</h5>
        <ul>
          {frontEnd.map(fe => (
            <li><i className="fas fa-angle-right"/> {fe}</li>
          ))}
        </ul>
      </div>

      {/* Design */}
      <div className="column is-one-quarter">
        <h5><i className="fas fa-bookmark"/> Design</h5>
        <ul>
          {design.map(des => (
            <li><i className="fas fa-angle-right"/> {des}</li>
          ))}
        </ul>
      </div>

      {/* Services / DevOps */}
      <div className="column is-one-quarter">
        <h5><i className="fas fa-bookmark"/> Services / DevOps</h5>
        <ul>
          {services.map(svc => (
            <li><i className="fas fa-angle-right"/> {svc}</li>
          ))}
        </ul>
      </div>

      {/* Others */}
      <div className="column is-one-quarter">
        <h5><i className="fas fa-bookmark"/> Others</h5>
        <ul>
          {others.map(oth => (
            <li><i className="fas fa-angle-right"/> {oth}</li>
          ))}
        </ul>
      </div>

    </Skillset>
  </>;
}

function SocialContacts() {
  return <>
    <Social>
      <a href="https://m.me/jhdcruz">
        <i className="fab fa-facebook-messenger"/>
      </a>
      <a href="https://github.com/jhdcruz">
        <i className="fab fa-github"/>
      </a>
      <a href="https://stackoverflow.com/users/7976244/aegir-aideron?tab=profile">
        <i className="fab fa-stack-overflow"/>
      </a>
      <a href="https://keybase.io/jhdcruz">
        <i className="fab fa-keybase"/>
      </a>
    </Social>
  </>;
}

export default function About() {
  return (
    <div className="container">
      {/* Profile Section */}
      <ProfileContent>
        {/* Profile Image */}
        <Profile className="img-fluid" src={ProfileImg}/>

        {/* Personal Info */}
        <Name>Joshua Hero Dela Cruz</Name>
        <PersonalTitle>A Front-end Web Developer & Designer</PersonalTitle>

        <SocialContacts/>
      </ProfileContent>

      {/* Biography / Introduction */}
      <Bio>
        Exercitation labore ut non est deserunt dolore cupidatat consectetur in
        nostrud sit nisi est laboris. Duis ad elit do consequat. Mollit nisi ut
        ea ea commodo est consectetur fugiat nulla ex. Sunt ad id quis nisi in
        enim laborum ea proident duis qui commodo.
      </Bio>

      <SkillSets/>
    </div>
  );
}
