import React from 'react';
import styled from 'styled-components';

export const Wrapper = (props) => {
  const {
    backgroundColor,
    boxSizing,
    children,
    color,
    dangerouslySetInnerHTML,
    display,
    flexFlow,
    jusifyContent,
    lineHeight,
    marginX,
    maxWidth,
    paddingX,
    width,
  } = props;

  return (
    <StyledWrapper
      backgroundColor={backgroundColor}
      boxSizing={boxSizing}
      color={color}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      display={display}
      flexFlow={flexFlow}
      jusifyContent={jusifyContent}
      lineHeight={lineHeight}
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
  background-color: ${(props) => props.backgroundColor || '#fff'};
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
  color: ${(props) => props.color || '#505050'};
  display: ${(props) => props.display || 'flex'};
  flex-flow: ${(props) => props.flexFlow || 'row wrap'};
  justify-content: ${(props) => props.jusifyContent || 'space-between'};
  line-height: ${(props) => props.lineHeight || '1.6'};
  margin: ${(props) => props.marginX || '30px auto'};
  max-width: ${(props) => props.maxWidth || '1170px'};
  padding: ${(props) => props.paddingX || '15px'};
  width: ${(props) => props.width || '100%'};
`;
