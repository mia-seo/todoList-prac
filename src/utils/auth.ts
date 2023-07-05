import { getItem } from "./storage";

export function getAuth() {
  const token = getItem("token");

  return {
    isLoggedIn: !!token,
    token,
  };
}
