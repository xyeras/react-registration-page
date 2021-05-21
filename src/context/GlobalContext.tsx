import React, { createContext, useState, useReducer } from 'react';
import { useParams } from 'react-router';
import instance from '../api/apiConfig';

// Initialize a default state for our app
const initialState = {
  users: [],
  user: undefined,
  getUsers: () => {},
  addUser: () => {}
};

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: action.payload };
  }
};

// Create Context from react
export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to our components
export const GlobalProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  const getUsers = async () => {
    try {
      let { data } = await instance.get('/');
      dispatch({ type: 'ADD_USER', payload: data });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  const addUser = async (user:User) => {
    try {
      let { data } = await instance.post('/user', user);
      dispatch({ type: 'ADD_USER', payload: data });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        user: state.user,
        getUsers,
        addUser
      }}>
      {children} {/* <AppRouter/> */}
    </GlobalContext.Provider>
  );
};