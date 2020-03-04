import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function NotFound() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: text.notFound,
          }}
        />
        <Link to="/">Home</Link>
      </Main>
    </Wrapper>
  );
}
