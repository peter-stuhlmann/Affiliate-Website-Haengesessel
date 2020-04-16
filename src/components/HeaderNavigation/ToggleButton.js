import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';

export default function ToggleButton({ open, setOpen }) {
  const { text } = useContext(Context);

  return (
    <StyledToggleButton
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={text.headerNavigation.toggleButton}
    >
      <div />
      <div />
      <div />
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled.button`
  background-color: #9c4808;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-around;
  margin: -15px 0 -15px 0;
  padding: 12px;
  position: ${({ open }) => (open ? 'fixed' : 'static')};
  top: 15px;
  width: ${({ open }) => (open ? '443px' : '50px')};
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    background-color: #fff;
    border-radius: 10px;
    height: 3px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 26px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
