import { USER__LOGIN } from "../constants/userConstants";
import { put, takeLatest, all } from "redux-saga/effects";

function* loginHandler(action) {
   console.log("saga running");
  yield put({
   
    type: USER__LOGIN,
    // payload: action.payload,
  });
}

function* loginSaga() {
  yield takeLatest(USER__LOGIN, loginHandler);
}

export default loginSaga;
