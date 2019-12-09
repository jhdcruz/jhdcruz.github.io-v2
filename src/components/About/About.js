import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// noinspection NpmUsedModulesInstalled
import ProfileImg from "images/icon.png";
import { Bio, Name, PersonalTitle, Profile, ProfileContent, Skillset, Social } from "./About.styled";

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

        {/* Social Media / Contact */}
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
      </ProfileContent>

      {/* Biography / Introduction */}
      <Bio>
        Exercitation labore ut non est deserunt dolore cupidatat consectetur in
        nostrud sit nisi est laboris. Duis ad elit do consequat. Mollit nisi ut
        ea ea commodo est consectetur fugiat nulla ex. Sunt ad id quis nisi in
        enim laborum ea proident duis qui commodo.
      </Bio>

      {/*  Skills Section */}
      <Skillset className="columns is-gapless">

        {/* Front-End */}
        <div className="column is-one-quarter">
          <h5><i className="fas fa-bookmark"/> Front-end</h5>
          <ul>
            <li><i className="fas fa-angle-right"/> JavaScript (ES5+)</li>
            <li><i className="fas fa-angle-right"/> ReactJS 16+</li>
            <li><i className="fas fa-angle-right"/> Electron Framework 5+</li>
          </ul>
        </div>

        {/* Design */}
        <div className="column is-one-quarter">
          <h5><i className="fas fa-bookmark"/> Design</h5>
          <ul>
            <li><i className="fas fa-angle-right"/> Flat & Material UI</li>
            <li><i className="fas fa-angle-right"/> Adobe XD</li>
            <li><i className="fas fa-angle-right"/> Figma</li>
            <li><i className="fas fa-angle-right"/> Photoshop</li>
          </ul>
        </div>

        {/* Services / DevOps */}
        <div className="column is-one-quarter">
          <h5><i className="fas fa-bookmark"/> Services / DevOps</h5>
          <ul>
            <li><i className="fas fa-angle-right"/> TravisCI</li>
            <li><i className="fas fa-angle-right"/> CircleCI</li>
            <li><i className="fas fa-angle-right"/> Sentry</li>
          </ul>
        </div>

        {/* Others */}
        <div className="column is-one-quarter">
          <h5><i className="fas fa-bookmark"/> Others</h5>
          <ul>
            <li><i className="fas fa-angle-right"/> Git VCS</li>
            <li><i className="fas fa-angle-right"/> Linux OS</li>
            <li><i className="fas fa-angle-right"/> Sample</li>
            <li><i className="fas fa-angle-right"/> Sample</li>
          </ul>
        </div>

      </Skillset>
    </div>
  );
}

