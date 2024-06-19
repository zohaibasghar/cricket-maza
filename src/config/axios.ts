import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cricket-be.vercel.app/api",
});

export const matchInstance = axios.create({
  baseURL: "https://api.cricapi.com/v1",
});

matchInstance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  if (!config.params) {
    config.params = {};
  }
  config.params["apikey"] = "75ae265f-bc42-4557-8abd-d4015e790064";

  return config;
});

export default axiosInstance;
