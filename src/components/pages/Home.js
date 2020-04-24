import React, { Fragment, useContext } from 'react';
import { Context } from '../../Context';
import { LinkedImage } from '../Image';
import { ShareButtons } from '../Share';
import { Wrapper } from '../Wrapper';
import { meta } from '../../helper/meta';
import { Main } from '../Main';
import Sidebar from '../Sidebar';
import ProductTable from '../ProductTable';

export default function Home() {
  const { text, products } = useContext(Context);

  document.title = text.home.meta.title;
  meta('name', 'description', text.home.meta.description);

  return (
    <Wrapper>
      <Main>
        <h1>{text.home.heading}</h1>
        <h2>{text.home.content[0].heading}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: text.home.content[0].text,
          }}
        />

        <LinkedImage
          alt={products[0].alt}
          caption={products[0].caption}
          href={products[0].href}
          source={products[0].source}
          src={products[0].src}
          title={products[0].title}
          width={products[0].width}
        />

        <h2>{text.home.content[1].heading}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: text.home.content[1].text,
          }}
        />

        <ProductTable />

        {text.home.content.slice(2).map((text) => (
          <Fragment key={text.heading}>
            <h2>{text.heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: text.text,
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
