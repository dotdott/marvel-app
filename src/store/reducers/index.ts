import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  stateAuth: authReducer,
  stateCards: cardsReducer,
  stateUser: userReducer,
});
