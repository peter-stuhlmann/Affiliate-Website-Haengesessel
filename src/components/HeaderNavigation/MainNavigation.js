import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default function MainNavigation() {
  const { text } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile">
        <Link to="/">{text.headerNavigation.siteTitle}</Link>
      </div>
    </StyledMainNavigation>
  );
}

const StyledMainNavigation = styled.div`
  background-color: #9c4808;
  display: flex;
  font-family: 'Viga', sans-serif;
  padding: 15px 3px;
  position: sticky;
  top: 0;

  a {
    letter-spacing: 1.5px;
  }

  .site-title-mobile {
    margin-left: 15px;
    text-align: center;
    width: 100%;
    font-size: 16px;

    @media (min-width: 1000px) {
      display: none;
    }

    a {
      color: #fff;
      letter-spacing: 1.5px;
      text-decoration: none;
    }
  }
`;
