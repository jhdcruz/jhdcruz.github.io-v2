import React from 'react';
import 'dependency/bulma/css/bulma.min.css';
import styled from 'styled-components';

const GitHub = styled.a`
  font-size: 12.5px;
  color: #828282;
  text-align: center;
  margin: 4px auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  :hover {
    text-decoration: none;
    color: #969696;
    cursor: help;
  }
`;

export default function Footer() {
  return (
    <footer className="hero-footer">
      <GitHub
        href="https://github.com/jhdcruz/jhdcruz.github.io-v2"
        className="gh-redirect"
      >
        Copyright &copy; 2019 | Joshua Hero Dela Cruz (Work in Progress)
      </GitHub>
    </footer>
  );
}
