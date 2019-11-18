import React from "react";

import ProfileImg from "images/icon.png";

import {
  Profile,
  ProfileContent,
  Name,
  PersonalTitle,
  Bio
} from "./About.styled";

export default function About() {
  return (
    <div className="container">
      {/* Profile Section */}
      <ProfileContent>
        <Profile src={ProfileImg} />
        <Name>Joshua Hero Dela Cruz</Name>
        <PersonalTitle>A Hobbyist Front-end Web Developer</PersonalTitle>
      </ProfileContent>

      <Bio>
        Exercitation labore ut non est deserunt dolore cupidatat consectetur in
        nostrud sit nisi est laboris. Duis ad elit do consequat. Mollit nisi ut
        ea ea commodo est consectetur fugiat nulla ex. Sunt ad id quis nisi in
        enim laborum ea proident duis qui commodo.
        <br />
        Ea occaecat quis occaecat aliqua dolore exercitation non id officia
        culpa ex laboris id. Officia ipsum duis ad officia eiusmod ullamco
        cupidatat veniam non ea. Quis aliqua nulla id ad elit consectetur. Eu
        dolore ad elit officia occaecat elit.
      </Bio>
    </div>
  );
}
