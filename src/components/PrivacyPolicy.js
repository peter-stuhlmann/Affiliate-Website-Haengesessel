import React, { useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function PrivacyPolicy() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: text.privacyPolicy,
          }}
        />
      </Main>
    </Wrapper>
  );
}
