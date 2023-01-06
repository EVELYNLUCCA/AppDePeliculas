import { TMDB } from "../../../config/TMDB";
import { seriesAdapter } from "../adapter/adapter";

export const getTopRatedSeries = async (language) => {
//	const res = await TMDB.api.get(TMDB.paths.series.top_rated);
let res = [];
if (language === 1 )
{
  res = await TMDB.api.get(TMDB.paths.series.top_rated);
}
else{
  res = await TMDB.apiEng.get(TMDB.paths.series.top_rated);
}
	return seriesAdapter(res.data.results,language); 
};
