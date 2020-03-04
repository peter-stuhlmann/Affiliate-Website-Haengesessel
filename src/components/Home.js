import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

export default function Home() {
  const { text } = useContext(Context);

  return (
    <StyledWrapper>
      <h1>{text.home.heading}</h1>
      <h2>{text.home.content[0].heading}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: text.home.content[0].text,
        }}
      />

      <h2>{text.home.content[1].heading}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: text.home.content[1].text,
        }}
      />

      <h2>{text.home.content[2].heading}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: text.home.content[2].text,
        }}
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  box-sizing: border-box;
  margin: 30px auto;
  max-width: 1170px;
  padding: 15px;
  width: 100%;
`;
