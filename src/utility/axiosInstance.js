import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 1000 * 60 * 2,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(config, "in intercepter");

    return config;
  },
  (error) => new Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (config) => config,
  (error) => new Promise.reject(error)
);

export default axiosInstance;
