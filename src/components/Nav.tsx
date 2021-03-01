import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import routes from '../constants/routes';
import { Pages } from '../types/Paths';

const Header = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
`;

const NavItem = styled.div`
  display: block;
`;

const LinkText = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  height: max-content;
  width: max-content;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
`;

export default function Nav() {
  return (
    <Header>
      <Image src="/logo-192.png" alt="Website's Logo" width={70} height={70} />
      <NavItem>
        {routes.map((route: Pages) => (
          <Link href={route.path} key={route.path} passHref>
            <LinkText>{route.name}</LinkText>
          </Link>
        ))}
      </NavItem>
    </Header>
  );
}
