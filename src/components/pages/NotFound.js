import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { Wrapper } from '../Wrapper';
import { meta } from '../../helper/meta';

export default function NotFound() {
  const { text } = useContext(Context);

  document.title = text.notFound.meta.title;
  meta('name', 'description', text.notFound.meta.description);

  return (
    <Wrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: text.notFound.content,
        }}
      />
      <Link to="/">Home</Link>
    </Wrapper>
  );
}
