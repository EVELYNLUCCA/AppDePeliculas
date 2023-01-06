import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../features/auth/AuthContext";
import DICC from "../../diccionario/diccionario";
import NavbarText from "../navbarText/NavbarText";
import styles from "./Footer.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { languageRedux } from "../../../features/auth/authSlice";

const Footer = () => {
	const { language, setLanguage } = useContext(AuthContext);
	const dispatch = useDispatch();
	return (
		<div className={styles.contenedor}>
			<div className={styles.titulo}>
				<b>FreeNetflix</b>
			</div>
			<div className={styles.menulang}>
				<div>{DICC.footer.language[language]}</div>
				<div>
					<span
						onClick={() => {
							if (language === 0) {
								setLanguage(1);
								sessionStorage.setItem("lang", JSON.stringify(1));
								// Uso Redux para el idioma
								dispatch(languageRedux({language: 1}));
							}
						}}
					>
						{DICC.footer.spanish[language]}
					</span>
					<span> | </span>
					<span
						onClick={() => {
							if (language === 1) {
								setLanguage(0);
								sessionStorage.setItem("lang", JSON.stringify(0));
								// Uso Redux para el idioma
								dispatch(languageRedux({language: 0}));
							}
						}}
					>
						{DICC.footer.english[language]}
					</span>
				</div>
			</div>
			<div className={styles.msj}>
				{/* {language==="esp" ? DICC.footer.derechos.esp : DICC.footer.derechos.eng} */}
				{DICC.footer.derechos[language]}
			</div>
		</div>
	);
};

export default Footer;
