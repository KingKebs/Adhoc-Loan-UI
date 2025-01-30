// src/context/LoanContext.js
import React, { createContext, useReducer, useContext } from 'react';

const LoanContext = createContext();

const initialState = {
  loanAmount: '',
  purpose: '',
  error: '',
  loading: false,
  success: false
};

const loanReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOAN_AMOUNT':
      return { ...state, loanAmount: action.payload };
    case 'SET_PURPOSE':
      return { ...state, purpose: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export const LoanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loanReducer, initialState);
  return (
    <LoanContext.Provider value={{ state, dispatch }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = () => {
  const context = useContext(LoanContext);
  if (!context) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
};
