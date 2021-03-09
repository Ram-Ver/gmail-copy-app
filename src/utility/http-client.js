import { call, delay, put } from "@redux-saga/core/effects";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

function* httpClient(configuration) {
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
