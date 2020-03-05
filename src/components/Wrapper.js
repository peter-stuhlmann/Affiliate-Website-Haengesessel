import React from 'react';
import styled from 'styled-components';

export const Wrapper = props => {
  const {
    backgroundColor,
    children,
    color,
    dangerouslySetInnerHTML,
    marginX,
    maxWidth,
    paddingX,
    width,
  } = props;

  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      color={color}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      marginX={marginX}
      maxWidth={maxWidth}
      paddingX={paddingX}
      width={width}
    >
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${props => props.backgroundColor || '#fff'};
  box-sizing: border-box;
  color: ${props => props.color || '#000'};
  margin: ${props => props.marginX || '30px auto'};
  max-width: ${props => props.maxWidth || '1170px'};
  padding: ${props => props.paddingX || '15px'};
  width: ${props => props.width || '100%'};
`;
