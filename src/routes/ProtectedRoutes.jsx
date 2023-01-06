import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../features/auth/AuthContext";


const ProtectedRoutes = ({ children }) => {
 const { isAuth } = useContext(AuthContext);


  if (isAuth) {
    return children;
  }




  return <Navigate to="/login" replace={true} />;
  // el replace={true} hace que no se pueda volver a la URL anterior 
  // con flecha "atras"
};

export default ProtectedRoutes;
