import { createContext, useContext } from 'react';

export const AuthenticationStateContext = createContext();

export const useAuthenticationStateContext = () => useContext(AuthenticationStateContext);

export const AuthenticationDispatchContext = createContext();

export const useAuthenticationDispatchContext = () => useContext(AuthenticationDispatchContext);
