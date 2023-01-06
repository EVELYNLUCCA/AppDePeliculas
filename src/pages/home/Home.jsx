import React, { useContext } from "react";
import Footer from "../../common/components/footer/Footer";
import Navbar from "../../common/components/navbar/Navbar";
import AuthContext from "../../features/auth/AuthContext";
import { getPopularMovies } from "../../features/movies/services/getPopular";
import { getPopularSeries } from "../../features/series/services/getPopularSeries";
import useFetch from "../../common/hooks/useFetch";

import Carousel from "../../common/components/carrousel/Carousel";
import Banner from "../../common/components/banner/Banner";
import Title from "../../common/components/title/Title";
import DICC from "../../common/diccionario/diccionario";
import CardModal from "../../common/components/cardModal/CardModal";

import { cerrar } from "../../common/components/cardModal/cardModalSlice";
import { useDispatch } from "react-redux";

const Home = () => {
	const { language } = useContext(AuthContext);
	//const { data: movies, error, isLoading } = useFetch(getPopularMovies);
	const {
		data: movies,
		error,
		isLoading,
	} = useFetch(getPopularMovies, language);
	const {
		data: series,
		error2,
		isLoading2,
	} = useFetch(getPopularSeries, language);

	const dispatch = useDispatch();
	// Ante cada render cierro el modal por las dudas
	dispatch(cerrar());

	//const { user } = useContext(AuthContext); //probar descomentado
	return (
		<div>
			<Navbar origen={"home"} />
			<CardModal />
			<Banner entities={movies} />
			<br />
			<br />
			{/* {texts.movies_view.title1} */}
			<Title text={DICC.movies_view.title1[language]} />
			<Carousel entities={movies} />
			<br />
			<Title text={DICC.series_view.title1[language]} />
			<Carousel entities={series} />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default Home;
