import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Context';

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
    <StyledStaticPage
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}

const StyledStaticPage = styled.main`
  box-sizing: border-box;
  margin: 30px auto;
  max-width: 1170px;
  padding: 15px;
  width: 100%;
`;
