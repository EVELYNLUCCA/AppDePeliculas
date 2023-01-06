import { TMDB } from "../../../config/TMDB";
import { moviesAdapter } from "../adapter/adapter";

export const getPopularMovies = async (language) => {
	//const res = await TMDB.apiEng.get(TMDB.paths.movies.popular);
	let res = [];
	if (language === 1) {
		res = await TMDB.api.get(TMDB.paths.movies.popular);
	} else {
		res = await TMDB.apiEng.get(TMDB.paths.movies.popular);
	}
	return moviesAdapter(res.data.results, language);
};
