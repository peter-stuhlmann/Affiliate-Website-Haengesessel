import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './Wrapper';

export const Main = (props) => {
  const { boxShadow, children, flex, lineHeight, paddingX, textAlign } = props;

  return (
    <>
      <Wrapper paddingX="0" marginX="0">
        <hr />
      </Wrapper>
      <StyledMain
        boxShadow={boxShadow}
        flex={flex}
        lineHeight={lineHeight}
        paddingX={paddingX}
        textAlign={textAlign}
      >
        {children}
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  flex: ${(props) => props.flex || '0 0 73%'};
  padding: ${(props) => props.paddingX || '15px'};
  margin-top: 30px;
  box-sizing: border-box;
  box-shadow: ${(props) =>
    props.boxShadow || '5px 5px 10px 0px rgba(0, 0, 0, 0.2)'};

  @media (max-width: 900px) {
    flex: 0 0 100%;
  }

  p {
    line-height: ${(props) => props.lineHeight || '1.6'};
    text-align: ${(props) => props.textAlign || 'justify'};
  }

  img {
    width: 100%;
  }
`;
