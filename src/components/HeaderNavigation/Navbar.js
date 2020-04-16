import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import styled from 'styled-components';

function Navbar({ open }) {
  const { text } = useContext(Context);

  return (
    <StyledNavbar open={open}>
      {text.headerNavigation.nav.map((links) => (
        <Link key={links.path} to={links.path}>
          {links.linkText}
        </Link>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  background-color: #9c4808;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 100vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  transition: transform 0.3s ease-in-out;
  width: 444px;
  z-index: 1;

  a,
  span {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.5px;
    padding: 7px 12px;
    text-decoration: none;
    transition: 0.2s;

    &:first-child {
      margin-top: 45px;
    }
  }

  h3 {
    padding: 7px 12px;
  }

  @media (min-width: 1000px) {
    box-shadow: none;
    display: block;
    height: 30px;
    margin: 0 auto;
    max-width: 100%;
    overflow-y: hidden;
    position: static;
    text-align: left;
    transform: translateX(0);
    width: 1170px;
  }
`;
