import React from 'react';
import { products } from './data/Products';
import { text } from './data/Text';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={{
        products,
        text,
      }}
    >
      {children}
    </Context.Provider>
  );
}
