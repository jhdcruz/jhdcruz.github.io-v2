// ! High Level imports
import React from 'dependency/react';
import ReactDOM from 'dependency/react-dom';

// * Components Import
import Wrapper from 'layouts/Wrapper';
import BgParticles from 'components/BgParticles';
import Footer from 'components/footer';

// * Assets Import
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "Kanit", "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #111;
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }

  .hero {
    margin: 0;
    padding: 0;
  }

  .button {
    margin: 3px 6px auto 0;
    padding: calc(0.5em - 1px) 0.8em;
    color: #fff;
    border-color: #fff;
    background-color: transparent;
    vertical-align: middle;

    i,
    svg {
      margin: auto 6px auto auto;
    }
  }

  .button.is-hovered,
  .button:hover {
    border-color: #3273dc;
    color: #3273dc;
  }

  hr {
    margin: 10px auto;
    display: block;
    border: none;
    height: 1px;
    border-radius: 15px;
    background: -webkit-gradient(
      radial,
      50% 50%,
      0,
      50% 50%,
      580,
      from(#fff),
      to(rgba(104, 104, 104, 0.3))
    );
  }
`;

const MainContent = styled.div`
  z-index: 2;
`;

ReactDOM.render(
  <>
    <BgParticles />
    <GlobalStyle />
    <MainContent className="hero">
      <Wrapper />
      <Footer />
    </MainContent>
  </>,
  document.getElementById('root')
);
