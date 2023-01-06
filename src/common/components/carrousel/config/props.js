import { Pagination, Navigation } from "swiper";

export const swiperProps = {
	slidesPerView: 5,
	spaceBetween: 30,
	slidesPerGroup: 5,
	loop: true,
	loopFillGroupWithBlank: true,
	mousewheel: true,
	// pagination: {
	// 	clickable: true,
	// },
	navigation: true,
	modules: [Pagination, Navigation],
};

export const ReactPlayerProps = {
	width: "100%",
	height: "100%",
	playing: true,
	loop: true,
	controls: false,
	volume: "0.8",
};
