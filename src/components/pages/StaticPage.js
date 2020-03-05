import React from 'react';
import { Wrapper } from '../Wrapper';

export default function StaticPage(props) {
  const { content } = props;

  return (
    <>
      <Wrapper
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </>
  );
}
