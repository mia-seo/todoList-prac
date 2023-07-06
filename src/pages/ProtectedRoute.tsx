import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../utils/auth";

type Props = {
  children: React.ReactNode;
  to: string;
};

export default function ProtectedRoute({ children, to }: Props) {
  const location = useLocation();
  const { isLoggedIn } = getAuth();

  if (location.pathname === "/todo" ? !isLoggedIn : isLoggedIn) {
    return <Navigate to={to} replace />;
  }

  return <>{children}</>;
}
