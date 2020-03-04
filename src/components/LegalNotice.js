import React, { useContext } from 'react';
import { Context } from '../Context';
import { Wrapper, Main } from './StyledComponents';

export default function LegalNotice() {
  const { text } = useContext(Context);

  return (
    <Wrapper>
      <Main>
        <div
          dangerouslySetInnerHTML={{
            __html: text.legalNotice,
          }}
        />
      </Main>
    </Wrapper>
  );
}
