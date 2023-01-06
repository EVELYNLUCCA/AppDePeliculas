import React, { useContext } from "react";
import AuthContext from "../../features/auth/AuthContext";
import Footer from "../../common/components/footer/Footer";
import Navbar from "../../common/components/navbar/Navbar";

import useFetch from "../../common/hooks/useFetch";
import Carousel from "../../common/components/carrousel/Carousel";
import Title from "../../common/components/title/Title";
import { getTopRatedMovies } from "../../features/movies/services/getTopRated";
import { getPopularMovies } from "../../features/movies/services/getPopular";
//import { texts } from "../../utils/constants";
import DICC from "../../common/diccionario/diccionario";
import Banner from "../../common/components/banner/Banner";
import CardModal from "../../common/components/cardModal/CardModal";
// Redux
import { abrir, cerrar } from "../../common/components/cardModal/cardModalSlice";
import { useSelector, useDispatch } from 'react-redux';


const Movies = () => {
	const { language } = useContext(AuthContext);
	const { data: movies, error, isLoading } = useFetch(getPopularMovies,language);
	const { data: movies2, error2, isLoading2 } = useFetch(getTopRatedMovies,language);

	const dispatch = useDispatch();
	// Ante cada render cierro el modal por las dudas
	dispatch(cerrar());
	return (
		<div>
			<Navbar origen={"movies"} />
			<br />
			<CardModal/>
			<Banner entities={movies2}/>
			<br />
			<br />
			<Title text={DICC.movies_view.title2[language]} />
			<Carousel entities={movies} />
			<br />
			<Title text={DICC.movies_view.title3[language]} />
			<Carousel entities={movies2} />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default Movies;
