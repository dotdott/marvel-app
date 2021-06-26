import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './sagas';

export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunkMiddleware, sagaMiddleware];

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const composedEnhancer = compose(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
