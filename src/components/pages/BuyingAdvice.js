import React, { Fragment, useContext } from 'react';

import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { Main } from '../Main';
import Sidebar from '../Sidebar';
import { ShareButtons } from '../Share';

export default function BuyingAdvice() {
  const { text } = useContext(Context);

  document.title = text.buyingAdvice.meta.title;
  meta('name', 'description', text.buyingAdvice.meta.description);

  return (
    <Wrapper>
      <Main>
        <h1>{text.buyingAdvice.heading}</h1>
        <h2>{text.buyingAdvice.content.summary.heading}</h2>
        <ul>
          {text.buyingAdvice.content.summary.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {text.buyingAdvice.content.details.map((item) => (
          <Fragment key={item.heading}>
            <h3>{item.heading}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: item.text,
              }}
            />
          </Fragment>
        ))}
        <ShareButtons />
      </Main>
      <Sidebar />
    </Wrapper>
  );
}
