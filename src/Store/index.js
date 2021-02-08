import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import userSaga from "../saga/userSaga";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools());
// sagaMiddleware.run(userSaga);

export default store;


// , applyMiddleware(sagaMiddleware)