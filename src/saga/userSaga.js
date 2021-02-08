import { USER__LOGIN } from "../actions/constants";
import { put, takeLatest, all } from "redux-saga/effects";

function* loginHandler(action) {
  yield put({
    type: USER__LOGIN,
    payload: action.payload,
  });
}

function* loginSaga() {
  yield all([takeLatest(USER__LOGIN, loginHandler)]);
}

export default loginSaga;
