import React, { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";

const AlertState = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, msgType) => {
    let action = {
      type: "SET_ALERT",
      payload: { msg, msgType },
    };

    dispatch(action);
  };

  const resetAlert = () => {
    let action = { type: "REMOVE_ALERT" };

    setTimeout(() => {
      dispatch(action);
    }, 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        resetAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
