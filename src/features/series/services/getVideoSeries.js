import { TMDB } from "../../../config/TMDB";
import { videoAdapter } from "../../../common/adapter/adapter";

export const getVideo = async (id, type = ) => {
	const res = await TMDB.api.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=ffb17583867391f474df8cffb0c6d9c9`);
	console.log(videoAdapter(res.results[0].key))
	return videoAdapter(res.results[0].key)
}

// https://www.youtube.com/watch?v=BdJKm16Co6M