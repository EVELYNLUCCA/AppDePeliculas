import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../card/Card";
import { swiperProps } from "./config/props";

const Carousel = ({ entities }) => {
	return (
		<Swiper {...swiperProps} className="mySwiper" style={{ margin: "0 5vw" }}>
			{entities.map((entity) => {
				return (
					<SwiperSlide key={entity.id}>
						<Card image={entity.backdrop} title={entity.title}
							id={entity.id}
							type2={entity.type2}
							titleData={entity}>
						</Card>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Carousel;
