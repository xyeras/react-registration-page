import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';

// Initialize a default state for our app
const initialState = {

};

const appReducer = (state: any, action: any) => {

};

// Create Context from react
export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to our components
export const GlobalProvider: React.FC = ({ children }) => {

  // const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
      }}>
      {children} {/* <AppRouter/> */}
    </GlobalContext.Provider>
  );
};