import React, { useEffect } from 'react';
import { Wrapper } from '../Wrapper';
import { meta } from '../../helper/meta';

export default function StaticPage(props) {
  const { content, description, title } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  meta(description);

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
