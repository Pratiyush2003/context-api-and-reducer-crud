import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: Math.ceil(Math.random() * 1000), text: "hello", name: "singh" },
    { id: Math.ceil(Math.random() * 1000), text: "hello", name: "singh" },
    { id: Math.ceil(Math.random() * 1000), text: "hello", name: "singh" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    dispatch({
        type : 'DELETE_TRANSACTION',
        payload: id
    });
  }
  function updateTransaction(transaction) {
    dispatch({
        type : 'UPDATE_TRANSACTION',
        payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions , addTransaction , deleteTransaction , updateTransaction}}>
        {children}
    </GlobalContext.Provider>
  );
};
