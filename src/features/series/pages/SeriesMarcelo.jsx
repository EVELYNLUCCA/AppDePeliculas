import React from "react";

import { getTopRatedSeries } from "../services/getTopRatedSeries";
import { getPopularSeries } from "../services/getPopularSeries";
import useFetch from "../../../common/hooks/useFetch";
import Carousel from "../../../common/components/carrousel/Carousel";
import Title from "../../../common/components/title/Title";
import { texts } from "../../../utils/constants";

const Series = () => {
	const { data: series, error, isLoading } = useFetch(getPopularSeries);
	const { data: series2, error2, isLoading2 } = useFetch(getTopRatedSeries);
	return (
		<div>
			<Title text={texts.series_view.title1} />
			<Carousel entities={series} />
			<Title text={texts.series_view.title2} />
			<Carousel entities={series2} />
		</div>
	);

};

export default Series;
