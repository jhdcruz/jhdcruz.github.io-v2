import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  Bio,
  Name,
  PersonalTitle,
  Profile,
  ProfileContent,
  Skillset,
  Social
} from "./About.styled";

import ProfileImg from "images/icon.png";
import aboutData from "./about.data";

function SkillSets() {
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

function SocialContacts() {
  return (
    <Social>
      {aboutData.SocialContact.map(contact => (
        <a href={contact.link} key={contact.id}>
          <i className={contact.icon} />
        </a>
      ))}
    </Social>
  );
}

function PersonalInfo() {
  return (
    <>
      <Name>Joshua Hero Dela Cruz</Name>
      <PersonalTitle>A Front-end Web Developer & Designer</PersonalTitle>
    </>
  );
}

function Biography() {
  return (
    <Bio>
      Exercitation labore ut non est deserunt dolore cupidatat consectetur in
      nostrud sit nisi est laboris. Duis ad elit do consequat. Mollit nisi ut ea
      ea commodo est consectetur fugiat nulla ex. Sunt ad id quis nisi in enim
      laborum ea proident duis qui commodo.
    </Bio>
  );
}

export default function About() {
  return (
    <div className="container">
      <ProfileContent>
        <Profile className="img-fluid" src={ProfileImg} />
        <PersonalInfo />
        <SocialContacts />
      </ProfileContent>
      <Biography />
      <SkillSets />
    </div>
  );
}
