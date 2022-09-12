import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("profile");
  config.headers!.token = token
    ? `Bearer ${JSON.parse(token).accessToken}`
    : "";
  return config;
});

export default instance;
