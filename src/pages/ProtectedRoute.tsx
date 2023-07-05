import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../utils/auth";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const { isLoggedIn } = getAuth();

  if (location.pathname === "/todo" && !isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  if ((location.pathname === "/signin" || "/signup") && isLoggedIn) {
    return <Navigate to="/todo" />;
  }

  return <>{children}</>;
}
