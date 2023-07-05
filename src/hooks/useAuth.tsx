import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleSetToken = (JWT: string) => {
    setToken(JWT);
    localStorage.setItem("token", JWT);
  };

  return { token, handleSetToken };
}
