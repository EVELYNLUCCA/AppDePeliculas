import React, { useState } from "react";
import { CardBackdrop } from "./CardBackdrop";
import { CardButton } from "./CardButton";
import { CardButtons } from "./CardButtons";
import { CardTitle } from "./CardTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPlus,
	faThumbsUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
// Uso de redux
import { abrir } from "../cardModal/cardModalSlice";
import { useDispatch } from "react-redux";
import { getVideo } from "../../services/getVideo";

const Card = (props) => {
	const [show, setShow] = useState({ display: "none" });
	const dispatch = useDispatch();

	const handleClickOpenModal = async () => {
		const urlVideo = await getVideo(props.type2, props.id);
		dispatch(abrir(props.titleData));
		return urlVideo;
	};

	return (
		<>
			<CardBackdrop
				image={props.image}
				onMouseEnter={() => {
					setShow({ display: "block" });
				}}
				onMouseLeave={() => {
					setShow({ display: "none" });
				}}
				style={{ margin: "20px auto 170px" }}
				onClick={() => {
					handleClickOpenModal(props.type2, props.id);
				}}
			>
				<CardTitle>{props.title}</CardTitle>
				<CardButtons
					style={show}
					// onMouseEnter={(e) => {
					//   setShow({ display: "block" });
					// }}
					// onMouseLeave={(e) => {
					//   setShow({ display: "none" });
					// }}
				>
					<CardButton>
						<FontAwesomeIcon icon={faPlay} />
					</CardButton>
					<CardButton>
						<FontAwesomeIcon icon={faPlus} />
					</CardButton>
					<CardButton>
						<FontAwesomeIcon icon={faThumbsUp} />
					</CardButton>
					<CardButton style={{ float: "right" }}>
						<FontAwesomeIcon icon={faChevronDown} />
					</CardButton>
					<p>{props.title}</p>
				</CardButtons>
			</CardBackdrop>
		</>
	);
};

export default Card;
