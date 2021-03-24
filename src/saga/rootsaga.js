import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import accountSaga from "./accountSaga";
import emailSaga from "./emailsSaga";

function* rootsaga() {
  yield all([userSaga(), accountSaga(), emailSaga()]);
}

export default rootsaga;
