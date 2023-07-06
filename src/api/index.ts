import axios from "axios";
import { getAuth } from "../utils/auth";

export const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const { isLoggedIn, token } = getAuth();
  if (isLoggedIn) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
