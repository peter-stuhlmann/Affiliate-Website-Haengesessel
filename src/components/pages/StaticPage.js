import React, { useContext } from 'react';
import { Context } from '../../Context';
import { Wrapper } from '../Wrapper';

export default function StaticPage() {
  const { text } = useContext(Context);

  let content;
  let path = document.location.pathname;

  switch (path) {
    case '/impressum':
      content = text.legalNotice;
      break;
    case '/datenschutzerklaerung':
      content = text.privacyPolicy;
      break;
    default: // ...
  }

  return (
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
