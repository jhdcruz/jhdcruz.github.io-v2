import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .control,
  .input,
  select,
  textarea {
    color: #f4f4f4 !important;
    background-color: rgba(0, 0, 0, 0.3) !important;
    vertical-align: middle;

    :focus {
      border-color: #3273dc;
    }

    option {
      color: #222 !important;
    }
  }

  ::placeholder {
    color: #fff !important;
    opacity: 0.9 !important;
  }

  ::placeholder {
    color: #fff !important;
    opacity: 0.9 !important;
  }

  ::placeholder {
    color: #fff !important;
    opacity: 0.9 !important;
  }

`;

export const ContactForm = styled.div`
  margin: 3vh auto;
  padding: 1rem 2.1rem;
`;

export const Form = styled.form`
  margin: 1em auto;
  padding: 1rem 8rem 0 0;
`;

// noinspection JSUnresolvedFunction
export const Title = styled.h2`
  color: white;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`;

export const Label = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

// noinspection JSUnresolvedFunction
export const Notice = styled.h6`
  color: #adadad;
  font-size: 12px;
  margin: 5px 0 0 0;
`;

export const Button = styled.button`
  margin: 0;
  color: #fff;
  border-color: #fff;
  background-color: transparent;
  vertical-align: middle;

  .is-hovered,
  :hover {
    border-color: #3273dc;
    color: #3273dc;
  }
`;
