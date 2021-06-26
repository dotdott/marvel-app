import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";

import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  stateCards: cardsReducer,
  stateUser: persistReducer(authPersistConfig, userReducer),
});

export default rootReducer;