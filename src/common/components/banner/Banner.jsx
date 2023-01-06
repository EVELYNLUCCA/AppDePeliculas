import React from "react";
import Clasification from "./components/Clasification";
import Description from "./components/Description";
import { BannerContainer } from "./styles/BannerContainer";
import Title from "./components/Title";
import Type from "./components/Type";
import Buttons from "./components/Buttons";


const Banner = (props) => {

	return (
		<BannerContainer image={props.entities[0]?.backdrop}>
			<Type type={props.entities[0]?.type} /> {/*{data?.type} */}
			<Title title={props.entities[0]?.title} />
			<Description overview={props.entities[0]?.description} />
			<Buttons titleData={props.entities[0]} />
			<Clasification edad="13" /> {/* {data?.edad} */}
		</BannerContainer>
	);
    
};

export default Banner;
