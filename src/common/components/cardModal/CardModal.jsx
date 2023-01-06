import React, { useEffect } from "react";
import DICC from "../../diccionario/diccionario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPlus,
	faThumbsUp,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import { CardModalDiv } from "./CardModalDiv";
// import { CardBackdropOpen, CardButton, CardButtons, CardTitle } from "./CardModalStyle";

// Uso de redux
import { cerrar } from "./cardModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { getVideo } from "../../services/getVideo";
import useFetchVideo from "../../hooks/fetchMovies";

const CardModal = () => {
	const dispatch = useDispatch();
	const cardIsOpen = useSelector((state) => state.cardModal.isOpen);
	const titleData = useSelector((state) => state.cardModal.titleData);
	const language = useSelector((state) => state.auth.language);

	const {
		data: urlVideo,  
		error,
		isLoading,
	} = useFetchVideo(getVideo, titleData.type2, titleData.id);

	const handleClickCloseModal = () => {
		dispatch(cerrar());
	};

	return (
		<div>
			<CardModalDiv
				imagelink={titleData.backdrop}
				isOpen={cardIsOpen}
				onClick={() => {
					handleClickCloseModal(); 
				}}
			>
				<div className="spaceFillA"></div>
				<div
					className="modalContainer" 
					onClick={(e) => {
						e.stopPropagation();
						// Esto es para que no salga al hacer clic en el Modal,
						// solo sale haciendo clic afuera
					}}
				>
					{/* //VIDEO */}  
					<ReactPlayer
						url={urlVideo}
						width="700px"
						height="378px"
						playing
						loop
						volume="0.8"
					/>
					{/* //fin VIDEO */}

					<div className="backDropContainer">
						{/* <img src={titleData.backdrop} alt="" /> */}
						<div className="modalType">{titleData.type}</div>
						<button
							className="exitButton"
							onClick={() => {
								dispatch(cerrar());
							}}
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						<div className="modalTitle">{titleData.title}</div>
					</div>
					<div className="restContainer">
						<div className="sectorButtonsDiv">
							<button className="stButton">
								<FontAwesomeIcon icon={faPlay} />
							</button>

							<button className="stButton">
								<FontAwesomeIcon icon={faPlus} />
							</button>

							<button className="stButton">
								<FontAwesomeIcon icon={faThumbsUp} />
							</button>
						</div>

						<div className="infoAdicional">
							<div>
								{titleData.description ||
									titleData.overview ||
									DICC.cardModal.noDescription[language]}
							</div>
							<br />
							<div>
								{DICC.cardModal.year[language]} {titleData.date.slice(0, 4)}
							</div>
							<br />
							<div>
								{DICC.cardModal.rating[language]}{" "}
								{titleData.rating || DICC.cardModal.noRating[language]}
							</div>
						</div>
					</div>
				</div>
				<div className="spaceFillA"></div>
				{/* </CardBackdropOpen> */}
			</CardModalDiv>
		</div>
	);
};

export default CardModal;

