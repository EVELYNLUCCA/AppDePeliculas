import styled from "styled-components";

export const CardModalDiv = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-content: center;
	grid-template-columns: auto;
	z-index: 90;
	width: 100%;
	height: 100%;
	margin: 10px;
	padding: 10px;
	top: 0;
	left: 0;
	justify-content: center;
	justify-items: center;
	align-items: center;
	align-content: center;
	overflow: visible;
	background-image: url(/src/assets/FondoGrisTran85.png);
	display: ${(props) => (props.isOpen ? "block" : "none")};

	.modalContainer {
		position: relative;
		z-index: 98;
		//background-color: rgba(0,0,0);
		background-color: rgba(30, 30, 30, 0.92);
		margin: auto;
		transition: all 0.3s ease-in-out;
		min-width: 300px;
		max-width: 700px;
		min-height: 300px;
		max-height: 700px;
		border-radius: 5px;
		text-shadow: 1px 1px 5px black;
	}

	.backDropContainer {
		position: relative;
		//display: grid;
		overflow: hidden;
		min-height: 35vh;
		max-height: 50vh;
		background-image: url(${(props) => props.imagelink});
		background-size: cover;
		background-repeat: no-repeat;
		transition: all 0.3s ease-in-out;
		border-radius: 5px;
	}

	.modalType {
		padding: 10px;
		font-size: 2rem;
		//background-color: rgba(30,30,30,0.62);
	}

	.modalTitle {
		position: absolute;
		padding: 10px;
		font-size: 2.8rem;
		bottom: 0;
		//background-color: rgba(30,30,30,0.62);
	}

	.restContainer {
		position: relative;
		border-radius: 5px;
	}

	.spaceFillA {
		min-height: 8%;
		max-height: 35%;
	}

	.sectorButtonsDiv {
		transition: all 0.3s ease-in-out;
		/* width: 380px; */
		/* height: 100px; */
		//width: 100%;
		margin: auto;
		background-color: black;
		border-radius: 0 0 5px 5px;
		/* position: absolute; */
		/* bottom: -120px; */
		padding: 10px;
	}

	.stButton {
		width: 30px;
		height: 30px;
		background-color: #333;
		border: 1px solid white;
		border-radius: 15px;
		color: white;
		padding: 0;
		margin: 5px;
	}

	.exitButton {
		position: absolute;
		top: 0;
		right: 0;
		width: 30px;
		height: 30px;
		background-color: #333;
		border: 1px solid white;
		border-radius: 15px;
		color: white;
		padding: 0;
		margin: 5px;
	}

	.rightButton {
		width: 30px;
		height: 30px;
		background-color: #333;
		border: 1px solid white;
		border-radius: 15px;
		color: white;
		padding: 0;
		margin: 5px;
		float: "right";
	}

	.infoAdicional {
		font-size: 1.75rem;
		padding: 10px;
	}
`;
