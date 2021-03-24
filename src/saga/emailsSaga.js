import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH__EMAILS,
  FETCH__EMAILS__REQUESTED,
  FETCH__EMAILS__FAILURE,
  FETCH__EMAILS__SUCCESS,
  SENT__EMAIL,
  SENT__EMAIL__FAILURE,
  SENT__EMAIL__REQUESTED,
  SENT__EMAIL__SUCCESS,
} from "../Constants/emailConstants";

import httpClient from "../utility/http-client";

function* fetchEmailsHandler({ payload }) {
  yield put({
    type: FETCH__EMAILS__REQUESTED,
    payload: "",
    status: "requested",
  });
  const configuration = {
    url: "/emails",
    method: "get",
    data: null,
  };
  const result = yield call(httpClient, configuration);
  if (result.error) {
    yield put({
      type: FETCH__EMAILS__FAILURE,
      payload: result.error,
      status: "failure",
    });
  } else {
    yield put({
      type: FETCH__EMAILS__SUCCESS,
      payload: result.data,
      status: "success",
    });
  }
}

function* sentEmailHandler({ payload }) {
  console.log(payload, "sent aga");
  yield put({
    type: SENT__EMAIL__REQUESTED,
    payload: "",
    status: "requested",
  });
  const configuration = {
    url: "/emails",
    method: "post",
    data: payload,
  };
  const result = yield call(httpClient, configuration);
  if (result.error) {
    yield put({
      type: SENT__EMAIL__FAILURE,
      payload: result.error,
      status: "failure",
    });
  } else {
    yield put({
      type: SENT__EMAIL__SUCCESS,
      payload: result.data,
      status: "success",
    });
  }
}

function* emailSaga() {
  yield all([
    takeLatest(SENT__EMAIL, sentEmailHandler),
    takeLatest(FETCH__EMAILS, fetchEmailsHandler),
  ]);
}

export default emailSaga;
