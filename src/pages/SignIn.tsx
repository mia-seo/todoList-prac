import { useNavigate } from "react-router-dom";
import { signin } from "../api/AuthApi";
import Auth, { Form } from "../components/Auth";
import { setItem } from "../utils/storage";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSignin = async (data: Form) => {
    try {
      const JWT = await signin(data);
      setItem("token", JWT.access_token);
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
