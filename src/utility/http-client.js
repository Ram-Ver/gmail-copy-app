import { call, put, delay, select } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
// import { hideLoader, showLoader } from "../actions/appActions";
import axiosInstance from "./axiosInstance";

function* httpClient(configuration, isLoader, auth) {
  // if (isLoader) {
  //   yield put(showLoader());
  //   yield delay(1000);
  // }
  try {
    const result = yield call(axiosInstance, { ...configuration });
    return result;
  } catch (error) {
    toast.error(error ? error.message : "server not responding");
    return {
      error,
    };
  }
}

export default httpClient;
