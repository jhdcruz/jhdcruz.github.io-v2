import React from "react";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";
import ProfileImg from "images/icon.png";
import SkillSets from "components/skillSets";
import aboutData from "components/json/about.data.json";

const ProfileContent = styled.div`
  display: block;
  color: white;
  text-align: center;
`;

const Profile = styled.img`
  border-radius: 100%;
  width: 16em;
  height: auto;
  margin: 0 auto;
  display: block;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  line-height: 1;
  display: block;
`;

const PersonalTitle = styled.h1`
  font-size: 1.1rem;
  margin: 2px;
  color: #dbdbdb;
  display: block;
`;

// * Social
const Social = styled.div`
  margin: 7px 0;

  a {
    font-size: 25px;
    color: #e7e7e7;

    :hover {
      color: #3273dc;
    }
  }

  i {
    margin: 0 10px 0 0;
    padding: 3px;
    height: auto;
  }
`;

// * Bio Section
const Bio = styled.div`
  margin: 0.5em auto;
  padding: 0.8em 3em;
  color: white;
  text-align: justify;
`;

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
      <PersonalTitle>A Hobbyist Front-End Web Developer</PersonalTitle>
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
