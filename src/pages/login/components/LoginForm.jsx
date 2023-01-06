import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../features/auth/AuthContext";
import DICC from "../../../common/diccionario/diccionario";
import styles from "./LoginForm.module.css"

const LoginForm = () => {
  const navigate = useNavigate();
 const { setIsAuth, setUser, isAuth, language, setLanguage } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = form;

     setIsAuth(true);
     setUser(email);
    // languaje: 0: Ingles - 1: Español
    setLanguage(1);
    sessionStorage.setItem("user", JSON.stringify(email));
    sessionStorage.setItem("lang", JSON.stringify(1));
    navigate("/");

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
        <div className={styles.logincontainer}>
      <form onSubmit={handleSubmit} className={styles.formcontainer}>
      {/* <label>
      {DICC.login.user[language]}
      </label> */}
        <input
          type="text"
          value={form.email}
          onChange={handleChange}
          name="email"
          placeholder={DICC.login.user[language]}
        />
        {/* <label>
        {DICC.login.password[language]}
          </label> */}
        <input
          type="password"
          value={form.password}
          onChange={handleChange}
          name="password"
          placeholder={DICC.login.password[language]}
        />
        <button type="submit" className={styles.submitbt}>
        {DICC.login.loginbtn[language]}
          </button>
      </form>
      </div>
  );
};

export default LoginForm;
