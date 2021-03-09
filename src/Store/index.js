import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import rootsaga from "../saga/rootsaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = composeWithDevTools;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootsaga);

export default store;
