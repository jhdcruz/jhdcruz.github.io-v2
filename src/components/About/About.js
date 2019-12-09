import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// noinspection NpmUsedModulesInstalled
import ProfileImg from "images/icon.png";
import { Bio, Name, PersonalTitle, Profile, ProfileContent, Social } from "./About.styled";

export default function About(){
  return (
    <div className="container">
      {/* Profile Section */}
      <ProfileContent>
        {/* Profile Image */}
        <Profile src={ProfileImg} />

        {/* Personal Info */}
        <Name>Joshua Hero Dela Cruz</Name>
        <PersonalTitle>A Front-end Web Developer & Designer</PersonalTitle>

        {/* Social Media / Contact */}
        <Social>
          <a href="https://m.me/jhdcruz">
            <i className="fab fa-facebook-messenger" />
          </a>
          <a href="https://github.com/jhdcruz">
            <i className="fab fa-github" />
          </a>
          <a href="https://stackoverflow.com/users/7976244/aegir-aideron?tab=profile">
            <i className="fab fa-stack-overflow" />
          </a>
          <a href="https://keybase.io/jhdcruz">
            <i className="fab fa-keybase" />
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
    </div>
  );
}

