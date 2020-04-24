import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../Context';

export default function CookieConsentBanner() {
  const { text, optInTracking, optOutTracking } = useContext(Context);

  return (
    <CookieConsent
      location="top"
      buttonText={text.cookieConsent.accept}
      onAccept={() => {
        optInTracking();
      }}
      enableDeclineButton
      declineButtonText={text.cookieConsent.decline}
      onDecline={() => {
        optOutTracking();
      }}
      cookieName="cookie-consent"
      style={{
        background: '#2B373B',
      }}
      buttonStyle={{
        backgroundColor: '#ffff00',
        borderRadius: '5px',
        color: '#000',
        fontSize: '13px',
      }}
      declineButtonStyle={{
        backgroundColor: '#424242',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '13px',
      }}
      expires={90}
    >
      {text.cookieConsent.message}
      <StyledLink to={text.cookieConsent.link.href}>
        {text.cookieConsent.link.text}
      </StyledLink>
    </CookieConsent>
  );
}

const StyledLink = styled(Link)`
  color: #fff;
`;
