import axios from "axios";

const axiosIntance = axios.create();

// Request interceptor for API calls
axiosIntance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      authorization: token,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosIntance;
