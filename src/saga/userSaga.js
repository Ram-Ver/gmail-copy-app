import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  FETCH__USERS,
  FETCH__USERS__REQUESTED,
  FETCH__USERS__FAILURE,
  FETCH__USERS__SUCCESS,
  GET__USERS,
  // USER__LOGIN,
  // USER__LOGIN__FAILURE,
  // USER__LOGIN__REQUESTED,
  // USER__LOGIN__SUCCESS,
} from "../Constants/userConstants";
import axiosInstance from "../utility/axiosInstance";
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

function* getUsersHandler(action) {
  // console.log(action, "user saga 9");
  // yield
}

function* user() {
  yield all([
    takeLatest(FETCH__USERS, fetchUsersHandler),
    // takeLatest(USER__LOGIN, loginHandler),
    takeLatest(GET__USERS, getUsersHandler),
  ]);
}

export default user;
