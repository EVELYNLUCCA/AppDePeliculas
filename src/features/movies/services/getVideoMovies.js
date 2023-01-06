import { TMDB } from "../../../config/TMDB";
import { videoAdapter } from "../../../common/adapter/adapter";

export const getVideoSeries = async (id) => {
	const res = await TMDB.api.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ffb17583867391f474df8cffb0c6d9c9`);
	return videoAdapter(res.results[0].key)
}

// https://www.youtube.com/watch?v=BdJKm16Co6M