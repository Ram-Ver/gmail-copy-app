import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import accountSaga from "./accountSaga";

function* rootsaga() {
  yield all([userSaga(), accountSaga()]);
}

export default rootsaga;
