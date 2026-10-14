import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-0-green.vercel.app/api",
  withCredentials: true,
});