"use client"
import styled from '@emotion/styled';

const NavBar = styled.nav`
  background-color: #348;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    color: #ddd;
  }
`;

function Header() {
  return (
    <NavBar>
      <div>Logo</div>
      <div>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </div>
    </NavBar>
  );
}

export default Header;