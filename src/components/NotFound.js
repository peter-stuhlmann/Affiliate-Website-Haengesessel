import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function NotFound() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <h1>{text.notFound.heading}</h1>
        <p>{text.notFound.content}</p>
        <Link to="/">Home</Link>
      </Main>
    </Wrapper>
  );
}
