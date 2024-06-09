import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cricket-be.vercel.app/api",
});

export default axiosInstance;
