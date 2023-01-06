import styled from "styled-components";

export const BackDropContainer = styled.div`
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
`;
