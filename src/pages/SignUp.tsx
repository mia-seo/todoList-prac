import { useNavigate } from "react-router-dom";
import { signup } from "../api/AuthApi";
import Auth, { Form } from "../components/Auth";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignup = async (data: Form) => {
    try {
      const status = await signup(data);
      if (status === 201) {
        alert("성공적으로 회원가입했습니다.");
        navigate("/signin");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <main>
      <Auth page="signup" onSubmit={handleSignup} />
    </main>
  );
}
