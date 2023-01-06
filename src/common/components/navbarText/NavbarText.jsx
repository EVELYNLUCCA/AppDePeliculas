import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../features/auth/AuthContext";
import styles from "./NavbarText.module.css";


const NavbarText = ({texto, marked}) => {
 const { language } = useContext(AuthContext);
     return (
      <div className= {marked ? styles.textmk : styles.text} >
   {texto[language]}
     </div>
   );

};

export default NavbarText;
