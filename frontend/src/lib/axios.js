import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-0-green.vercel.app/api",
});

// attach the bearer token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
