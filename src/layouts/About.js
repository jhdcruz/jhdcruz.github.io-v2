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
  margin: 4% 1% 4% 0;
`;

const Profile = styled.img`
  border-radius: 100%;
  width: 14em;
  height: auto;
  margin: 3% auto;
  display: block;
`;

const Name = styled.h1`
  font-size: 1.9rem;
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
    font-size: 30px;
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

export default function About() {
  return (
    <div className="container-fluid columns">
      <ProfileContent className="column is-one-third">
        <Profile className="img-fluid" src={ProfileImg} />
        <PersonalInfo />
        <SocialContacts />
      </ProfileContent>
      <SkillSets className="column is-full" />
    </div>
  );
}
