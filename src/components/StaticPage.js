import React, { useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function StaticPage() {
  const { text } = useContext(Context);

  let content;
  let path = document.location.pathname;

  switch (path) {
    case '/':
      content = text.home;
      break;
    case '/impressum':
      content = text.legalNotice;
      break;
    case '/datenschutzerklaerung':
      content = text.privacyPolicy;
      break;
    default: // ...
  }

  return (
    <Wrapper>
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Main>
    </Wrapper>
  );
}
