import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "../features/auth/AuthContext";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Movies from "../pages/Movies/Movies";
import TvSeries from "../pages/tvseries/TvSeries";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  const userStorage = JSON.parse(sessionStorage.getItem("user"));
  const userLanguage = JSON.parse(sessionStorage.getItem("lang"));
  const { setIsAuth, setUser, isAuth, setLanguage } = useContext(AuthContext);
  //console.log(userStorage);
  const flag = isAuth;
  if (flag===false)
  {
  if (userStorage) {
    console.log("Se cargo usuario del Session Storage");
    setIsAuth(true);
    setUser(userStorage);
    setLanguage(userLanguage);
  }}


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Routes>
              <Route path="/movies" element={<Movies />} />
                <Route path="/" element={<Home />} />
                <Route path="/tvseries" element={<TvSeries />} />
              </Routes>
            </ProtectedRoutes>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
