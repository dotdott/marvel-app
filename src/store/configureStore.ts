import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(preloadedState = {}) {
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  );

  const composedEnhancer = compose(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  const persistor = persistStore(store);

  return { store, persistor };
}
