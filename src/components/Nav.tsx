import Link from 'next/link';
import styled from 'styled-components';
import routes from '../constants/routes';

const Tabs = styled.div`
  display: inline-block;
`;

const LinkText = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
`;

const Nav = () => (
  <Tabs>
    <Link href={routes.HOME} passHref>
      <LinkText>Home</LinkText>
    </Link>
    <Link href={routes.PROJECTS} passHref>
      <LinkText>Projects</LinkText>
    </Link>
    <Link href={routes.ABOUT} passHref>
      <LinkText>About</LinkText>
    </Link>
  </Tabs>
);

export default Nav;
