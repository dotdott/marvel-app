import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export default function configureStore(preloadedState = {}) {
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  );

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const composedEnhancer = compose(middlewareEnhancer);

  const store = createStore(persistedReducer, preloadedState, composedEnhancer);

  const persistor = persistStore(store);

  return { store, persistor };
}
