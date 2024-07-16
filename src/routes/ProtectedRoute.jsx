import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useAuth } from "../providers/AuthProvider";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    );
  }
  if (!currentUser) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;