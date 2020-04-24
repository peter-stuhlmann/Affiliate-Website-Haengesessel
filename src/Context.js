import React from 'react';
import { products } from './data/Products';
import { text } from './data/Text';
import { useLocalStorage } from './helper/useLocalStorage';
import { trackingCode } from './helper/analytics';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [tracking, setTracking] = useLocalStorage('Tracking', false);

  const toggleTracking = () => {
    setTracking(!tracking);
  };

  const optInTracking = () => {
    setTracking(true);
  };

  const optOutTracking = () => {
    setTracking(false);
  };

  if (tracking === false) {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  } else {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  }

  return (
    <Context.Provider
      value={{
        products,
        text,
        toggleTracking,
        optInTracking,
        optOutTracking,
        tracking,
      }}
    >
      {children}
    </Context.Provider>
  );
}
