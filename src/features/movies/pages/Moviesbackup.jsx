import React from "react";

import { getPopularMovies } from "../../../features/movies/services/getPopular";
import { getTopRatedMovies } from "../services/getTopRated";
import useFetch from "../../../common/hooks/useFetch";
import Carousel from "../../../common/components/carrousel/Carousel";
import Title from "../../../common/components/title/Title";
import { texts } from "../../../utils/constants";

const Moviesbackup = () => {
	const { data: movies, error, isLoading } = useFetch(getPopularMovies);
	const { data: movies2, error2, isLoading2 } = useFetch(getTopRatedMovies)

	return (
		<>
			<Title text={texts.movies_view.title1} />
			<Carousel entities={movies} />
			<Title text={texts.movies_view.title2} />
			<Carousel entities={movies2} />
		</>
	);
};

export default Moviesbackup;
