import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { Wrapper } from '../Wrapper';

export default function NotFound() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: text.notFound,
        }}
      />
      <Link to="/">Home</Link>
    </Wrapper>
  );
}
