import React, { Fragment, useContext } from 'react';

import { Context } from '../Context';
import { Button } from './Buttons';

export default function ProductTable() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <td>{text.home.table.criteria.title}</td>
            {text.home.table.products.map((product) => (
              <td>{product.title}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            {text.home.table.products.map((product) => (
              <td>
                <a
                  href={product.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={product.img.src} alt={product.img.alt} />
                </a>
              </td>
            ))}
          </tr>
          <tr>
            <td>{text.home.table.criteria.color}</td>
            {text.home.table.products.map((product) => (
              <td>{product.color}</td>
            ))}
          </tr>
          <tr>
            <td>{text.home.table.criteria.weight}</td>
            {text.home.table.products.map((product) => (
              <td>{product.weight}</td>
            ))}
          </tr>
          <tr>
            <td>{text.home.table.criteria.dimensions}</td>
            {text.home.table.products.map((product) => (
              <td>{product.dimensions}</td>
            ))}
          </tr>
          <tr>
            <td>{text.home.table.criteria.rating}</td>
            {text.home.table.products.map((product) => (
              <td>{product.rating}</td>
            ))}
          </tr>
          <tr>
            <td>{text.home.table.criteria.price}</td>
            {text.home.table.products.map((product) => (
              <td>{product.price}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            {text.home.table.products.map((product) => (
              <td>
                <Button
                  href={product.link.href}
                  linkText={text.buttons.affiliate.linkText}
                  style={{ whiteSpace: 'nowrap' }}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p className="source">{text.home.table.source}</p>
    </Fragment>
  );
}
