import { createContext, useReducer } from "react";
import { UIInitialState } from "./initial-state";
import { UIReducer } from "./reducer";

export const UIContext = createContext(undefined);

export const UIProvider = ({ children }) => {
  const [UIState, UIDispatch] = useReducer(UIReducer, UIInitialState);
  return (
    <UIContext.Provider value={{ UIState, UIDispatch }}>
      {children}
    </UIContext.Provider>
  );
};
