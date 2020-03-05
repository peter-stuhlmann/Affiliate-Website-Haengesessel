import React, { useContext } from 'react';
import { Context } from '../../Context';
import { LinkedImage } from '../Image';
import { ShareButtons } from '../Share';
import { Wrapper } from '../Wrapper';

export default function Home() {
  const { text, products } = useContext(Context);

  return (
    <Wrapper>
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

      <h2>{text.home.content[2].heading}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: text.home.content[2].text,
        }}
      />
      <ShareButtons />
    </Wrapper>
  );
}
