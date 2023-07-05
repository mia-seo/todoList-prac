import React from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../api/AuthApi";
import Auth, { Form } from "../components/Auth";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const { handleSetToken } = useAuth();
  const navigate = useNavigate();
  const handleSignin = async (data: Form) => {
    try {
      const JWT = await signin(data);
      handleSetToken(JWT.access_token);
      alert("로그인에 성공했습니다.");
      navigate("/todo");
    } catch {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <main>
      <Auth page="signin" onSubmit={handleSignin} />
    </main>
  );
}
