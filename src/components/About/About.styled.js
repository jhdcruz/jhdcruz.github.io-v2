import styled from "styled-components";

// * Profile Section

export const ProfileContent = styled.div`
  display: block;
  color: white;
  text-align: center;
`;

export const Profile = styled.img`
  border-radius: 100%;
  width: 16em;
  height: auto;
  margin: 0 auto;
  display: block;
`;

// noinspection JSUnresolvedFunction
export const Name = styled.h1`
  font-size: 1.8rem;
  line-height: 1;
  display: block;
`;

// noinspection JSUnresolvedFunction
export const PersonalTitle = styled.h1`
  font-size: 1.1rem;
  margin: 2px;
  color: #dbdbdb;
  display: block;
`;

// * Social
export const Social = styled.div`
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

export const Bio = styled.div`
  margin: 0.5em auto;
  padding: 0.8em 3em;
  color: white;
  text-align: justify;
`;

// * Skill Section

export const Skillset = styled.div`
  color: white;
  margin: 8px auto;
  padding: 0 5rem;
  text-align: justify;
`;
