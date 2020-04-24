import React, { useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';

export default function StaticPage() {
  const { text } = useContext(Context);

  let content, description, title;

  switch (document.location.pathname) {
    case '/datenschutzerklaerung':
      content = text.privacyPolicy.content;
      description = text.privacyPolicy.meta.description;
      title = text.privacyPolicy.meta.title;
      break;
    default: // ...
  }

  document.title = title;
  meta('name', 'description', description);

  return (
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
