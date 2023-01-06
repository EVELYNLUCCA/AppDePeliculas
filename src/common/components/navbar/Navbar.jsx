import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../features/auth/AuthContext";
import DICC from "../../diccionario/diccionario";
import NavbarText from "../navbarText/NavbarText";
import styles from "./Navbar.module.css";


const Navbar = ({origen}) => {
 const { user, isAuth, setUser, setIsAuth, language } = useContext(AuthContext);
  if (isAuth){
    return (
      <div className={styles.contenedor}>
       <div className={styles.titulo}><b>FreeNetflix</b></div>
       <div className={styles.menu}>
        {/* <div> <Link to={"/"}> {origen==="home" ? <b>Home</b> : "Home"} </Link> </div> */}
        <div> <Link to={"/"}> {origen==="home" ? <NavbarText texto={DICC.navbar.home} marked={true}/> : <NavbarText texto={DICC.navbar.home} marked={false} />} </Link> </div>
        <div><Link to={"/movies"}> {origen==="movies" ? <NavbarText texto={DICC.navbar.movies} marked={true} /> : <NavbarText texto={DICC.navbar.movies} marked={false} />} </Link></div>
        <div><Link to={"/tvseries"}> {origen==="tvseries" ? <NavbarText texto={DICC.navbar.series} marked={true} /> : <NavbarText texto={DICC.navbar.series} marked={false} />} </Link></div>
        </div>
       <div className={styles.usuario}>
        {DICC.navbar.user[language]} {user}
        <button 
        className={styles.lgoutbt}
        onClick={()=>{
          setUser("");
          setIsAuth(false);
          sessionStorage.clear();
        }}>
          {DICC.navbar.logout[language]}
        </button>
       </div>
     </div>
   );
  }
  else
  {
    return (
      <div className={styles.contenedor}>
       <div className={styles.titulo}><b>FreeNetflix</b></div>
       <div className={styles.centro}>
       {DICC.navbar.login[language]}
       </div>
       <div className={styles.usuario}>
       {DICC.navbar.nouser[language]}</div>
     </div>
   );
  }
};

export default Navbar;
