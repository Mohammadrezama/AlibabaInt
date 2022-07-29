import { UIInitialState } from "./initial-state";
import { UITypes } from "./types";

export const UIReducer = (state = UIInitialState, { payload, type }) => {
  switch (type) {
    case UITypes.ON_SET_THEME_MODE:
      return {
        ...state,
        darkMode: payload.darkMode,
      };
    default:
      break;
  }
};
