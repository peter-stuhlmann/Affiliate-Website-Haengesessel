import React from 'react';
import styled from 'styled-components';

import { Amazon } from './Icons';

export const Button = (props) => {
  const {
    backgroundColor,
    backgroundColorHover,
    color,
    href,
    linkText,
    maxWidth,
    width,
  } = props;

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      href={href}
      maxWidth={maxWidth}
      width={width}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText} <Amazon />
    </StyledButton>
  );
};

const StyledButton = styled.a`
  background-color: ${(props) => props.backgroundColor || '#9c4808'};
  border-radius: 5px;
  box-sizing: border-box;
  color: ${(props) => props.color || '#fff'};
  display: block;
  line-height: 1.6;
  margin: 20px auto 15px auto;
  max-width: ${(props) => props.maxWidth || '300px'};
  padding: 15px;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;
  width: ${(props) => props.width || '100%'};

  &:hover {
    background-color: ${(props) => props.backgroundColorHover || '#431f04'};
  }

  svg {
    fill: ${(props) => props.color || '#fff'};
    height: 20px;
    margin-bottom: -5px
    margin-left: 2px;
  }
`;
