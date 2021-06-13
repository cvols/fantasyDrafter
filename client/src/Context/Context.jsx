import React, { createContext, useContext, useReducer } from 'react';

export const Context = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>{children}</Context.Provider>
);

export const useDataLayer = () => useContext(Context);
