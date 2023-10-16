import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currUser = useSelector((state) => state.user.currUser);
  return currUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
