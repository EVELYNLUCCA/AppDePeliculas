import { TMDB } from "../../../config/TMDB";
import { moviesAdapter } from "../adapter/adapter";

export const getTopRatedMovies = async (language) => {
//	const res = await TMDB.api.get(TMDB.paths.movies.top_rated);
let res = [];
if (language === 1 )
{
  res = await TMDB.api.get(TMDB.paths.movies.top_rated);
}
else{
  res = await TMDB.apiEng.get(TMDB.paths.movies.top_rated);
}
	return moviesAdapter(res.data.results,language);
};
