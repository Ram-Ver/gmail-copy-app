import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE__AN__ACCOUNT,
  CREATE__AN__ACCOUNT__FAILURE,
  CREATE__AN__ACCOUNT__REQUESTED,
  CREATE__AN__ACCOUNT__SUCCESS,
} from "../Constants/otherConstants";
import httpClient from "../utility/http-client";

function* createAnAccountHandler({ payload }) {
  console.log(payload);
  yield put({
    type: CREATE__AN__ACCOUNT__REQUESTED,
    payload: "",
    status: "requested",
  });
  const configuration = {
    url: "/users",
    method: "post",
    data: payload,
  };
  const result = yield call(httpClient, configuration);
  if (result.error) {
    yield put({
      type: CREATE__AN__ACCOUNT__FAILURE,
      payload: result.error,
      status: "failure",
    });
  } else {
    console.log(result.data, "result in else");
    yield put({
      type: CREATE__AN__ACCOUNT__SUCCESS,
      payload: result.data,
      status: "success",
    });
  }
}

function* accountSaga() {
  yield all([takeLatest(CREATE__AN__ACCOUNT, createAnAccountHandler)]);
}

export default accountSaga;