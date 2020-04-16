import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context';

export default function FooterComponent() {
  const { text, toggleTracking, tracking } = useContext(Context);

  const currentYear = new Date().getFullYear();

  let button;
  tracking === false
    ? (button = text.tracking.activate)
    : (button = text.tracking.deactivate);

  return (
    <StyledFooter>
      <div>
        <p>
          &copy; <Link to={text.copyright.path}>{text.copyright.title}</Link>,{' '}
          {text.copyright.startYear} - {currentYear}
        </p>
        <nav>
          <ul>
            <li>
              <span style={{ cursor: 'pointer' }} onClick={toggleTracking}>
                {button}
              </span>
            </li>
            {text.footerNavigation.map((nav) => (
              <li key={nav.title}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #9c4808;
  color: #fff;
  line-height: 1.6;
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap row;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    box-sizing: border-box;

    p {
      margin: 0;
      display: inline-block;
      padding: 15px;
      text-align: center;
      box-sizing: border-box;

      @media (max-width: 1170px) {
        flex: 0 0 100%;
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: 0.3s ease all;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    nav {
      display: inline-block;
      text-align: center;
      padding: 15px;
      box-sizing: border-box;

      @media (max-width: 1170px) {
        flex: 0 0 100%;
      }

      ul {
        margin: 0;
        padding: 0;

        @media (max-width: 1170px) {
          display: block;
        }

        li {
          display: inline;
          font-size: 1em;
          margin-left: 25px;
          white-space: nowrap;

          @media (max-width: 1170px) {
            display: block;
            margin-left: 0;
          }

          a {
            color: #fff;
            text-decoration: none;
            transition: 0.3s ease all;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
`;
