import React, { Fragment, useContext, useEffect } from 'react';
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
    case '/impressum':
      content = text.legalNotice.content;
      description = text.legalNotice.meta.description;
      title = text.legalNotice.meta.title;
      share = false;
      break;
    case '/kaufberatung':
      content = text.buyingAdvice.content;
      description = text.buyingAdvice.meta.description;
      title = text.buyingAdvice.meta.title;
      share = true;
      break;
    case '/kontakt':
      content = text.contact.content;
      description = text.contact.meta.description;
      title = text.contact.meta.title;
      share = false;
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
