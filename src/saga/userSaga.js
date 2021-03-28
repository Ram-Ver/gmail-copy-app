import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  FETCH__USERS,
  FETCH__USERS__REQUESTED,
  FETCH__USERS__FAILURE,
  FETCH__USERS__SUCCESS,
} from "../Constants/userConstants";
import httpClient from "../utility/http-client";

function* fetchUsersHandler(payload) {
  yield put({
    type: FETCH__USERS__REQUESTED,
    payload: "",
    status: "requested",
  });

  const configuration = {
    url: "/users",
    method: "get",
    data: null,
  };
  const result = yield call(httpClient, configuration);
  if (result.error) {
    yield put({
      type: FETCH__USERS__FAILURE,
      payload: result.error,
      status: "failure",
    });
  } else {
    yield put({
      type: FETCH__USERS__SUCCESS,
      payload: result.data,
      status: "success",
    });
  }
}

function* user() {
  yield all([takeLatest(FETCH__USERS, fetchUsersHandler)]);
}

export default user;
