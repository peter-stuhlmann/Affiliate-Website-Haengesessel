import React, { Fragment, useContext } from 'react';
import { Wrapper } from '../Wrapper';
import { Context } from '../../Context';
import { meta } from '../../helper/meta';
import { ShareButtons } from '../Share';

export default function StaticPage() {
  const { text } = useContext(Context);

  let content, description, share, title;

  switch (document.location.pathname) {
    case '/datenschutzerklaerung':
      content = text.privacyPolicy.content;
      description = text.privacyPolicy.meta.description;
      title = text.privacyPolicy.meta.title;
      share = false;
      break;
    case '/kaufberatung':
      content = text.buyingAdvice.content;
      description = text.buyingAdvice.meta.description;
      title = text.buyingAdvice.meta.title;
      share = true;
      break;
    default: // ...
  }

  document.title = title;
  meta('name', 'description', description);

  return (
    <Fragment>
      <Wrapper
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {share ? <ShareButtons /> : null}
    </Fragment>
  );
}
