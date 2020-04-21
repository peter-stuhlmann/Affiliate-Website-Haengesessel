import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { Button } from './Buttons';
import Stars from './Stars';

export default function ProductTable() {
  const { text } = useContext(Context);

  return (
    <Fragment>
      <h2>{text.home.table.heading}</h2>
      <StyledTable>
        <table>
          <thead>
            <tr>
              <td>{text.home.table.criteria.title}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>{product.title}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>
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
              <td></td>
              {text.home.table.products.map((product) =>
                product.special ? (
                  <td key={product.link.href} className="special">
                    {product.special}
                  </td>
                ) : null
              )}
            </tr>
            <tr>
              <td>{text.home.table.criteria.color}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>{product.color}</td>
              ))}
            </tr>
            <tr>
              <td>{text.home.table.criteria.weight}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>{product.weight}</td>
              ))}
            </tr>
            <tr>
              <td>{text.home.table.criteria.dimensions}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>{product.dimensions}</td>
              ))}
            </tr>
            <tr>
              <td>{text.home.table.criteria.rating}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>
                  {product.rating ? (
                    <Fragment>
                      <Stars rating={product.rating} /> {product.rating}/5
                    </Fragment>
                  ) : null}
                </td>
              ))}
            </tr>
            <tr>
              <td>{text.home.table.criteria.price}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href} className="price">
                  {product.price}
                </td>
              ))}
            </tr>
            <tr>
              <td>{text.home.table.criteria.shipping}</td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>{product.shipping}</td>
              ))}
            </tr>
            <tr>
              <td></td>
              {text.home.table.products.map((product) => (
                <td key={product.link.href}>
                  <Button
                    href={product.link.href}
                    linkText={text.buttons.affiliate.linkText}
                    className="btn"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <p className="source">{text.home.table.source}</p>
      </StyledTable>
    </Fragment>
  );
}

const StyledTable = styled.div`
  overflow-x: auto;
  max-width: calc(100vw - 47px);

  @media (min-width: 1170px) {
    max-width: calc(1140px / 100 * 72);
  }

  table {
    width: 100%;
    line-height: 1.6;
    margin: 0 0 24px;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;

    thead {
      background-color: #9c4808;
      color: #fff;
      font-weight: bold;
      letter-spacing: 2px;
      text-align: center;
    }

    td {
      padding: 7px 2px;
    }

    td:first-child {
      font-weight: bold;
    }

    tr {
      &:nth-child(even) {
        background-color: #9c480812;
      }

      &:nth-child(2) {
        background-color: #fff;
      }
    }

    .special {
      background-color: #ffbb00;
      color: #000;
      text-align: center;
      border-radius: 5px;
    }

    .price {
      color: green;
      font-weight: bold;
    }

    .btn {
      padding: 4px 7px;
      width: 175px;
    }
  }

  .source {
    font-style: italic;
  }
`;
