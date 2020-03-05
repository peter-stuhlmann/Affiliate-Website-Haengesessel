import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import { Wrapper } from '../Wrapper';
import { meta } from '../../helper/meta';

export default function NotFound() {
  const { text } = useContext(Context);

  useEffect(() => {
    document.title = text.home.meta.title;
  }, [text.home.meta.title]);

  meta(text.home.meta.description);

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
