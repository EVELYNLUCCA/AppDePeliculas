import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../features/auth/AuthContext";

const PublicRoute = ({ children }) => {
const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
