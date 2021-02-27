import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
// import userSaga from "../saga/userSaga";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // compose(
    // applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  // )
);
// sagaMiddleware.run(userSaga);

export default store;

