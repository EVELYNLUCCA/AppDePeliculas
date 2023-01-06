import { TMDB } from "../../../config/TMDB";
import { seriesAdapter } from "../adapter/adapter";

export const getPopularSeries = async (language) => {
	//const res = await TMDB.api.get(TMDB.paths.series.popular);
	let res = [];
	if (language === 1) {
		res = await TMDB.api.get(TMDB.paths.series.popular);
	} else {
		res = await TMDB.apiEng.get(TMDB.paths.series.popular);
	}
	return seriesAdapter(res.data.results, language);
};
