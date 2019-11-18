import styled, { createGlobalStyle } from "styled-components";

export const RouterWrapper = createGlobalStyle`
  .routerContent {
    position: relative;
  }

  .routerContent > div {
    position: absolute;
    width: 100%;
  }
`;

export const NavStyles = createGlobalStyle`
  .navbar-end {
    color: whitesmoke;
    font-size: 12.8px;
    text-transform: uppercase;
    letter-spacing: 1.4px;

  }
`;

export const NavBar = styled.nav`
  margin-bottom: 30px;

  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
`;

export const NavLeft = styled.div`
  margin-right: 135px;
`;

export const WebBrand = styled.li`
  margin-left: 100px;
`;

export const NavRight = styled.div`
  margin-right: 125px;

  .navbar-item {
    color: white;

    :hover,
    .active {
      border-top: 2px solid #b5b5b5;
    }
  }

  .active {
    border-top: 2px solid #eeeeee;
    color: #3273dc;
  }
`;
