import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";

export const PrivateRoute = () => {
  const { auth } = useAuth();
  return auth.isAuth ? <Outlet /> : <Navigate to="/login" />;
};
