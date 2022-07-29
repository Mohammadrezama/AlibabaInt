import React, { useContext } from "react";
import { UIContext, UITypes } from "providers";

export const useUI = () => {
  const { UIState, UIDispatch } = useContext(UIContext);
  return {
    toggleDarkMode: () => {
      document.documentElement.setAttribute(
        "data-theme",
        UIState.darkMode ? "light" : "dark"
      );
      UIDispatch({
        type: UITypes.ON_SET_THEME_MODE,
        payload: { darkMode: !UIState.darkMode },
      });
    },
    UIState,
  };
};
