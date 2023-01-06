import styled from "styled-components";

export const CardBackdrop = styled.div`
transition: all 0.3s ease-in-out;
width: 300px;
height: 150px;
background-image: url(${(props)=>props.image});
background-size: cover;
background-position: center;
border-radius: 5px;
color: white;
text-shadow: 1px 1px 5px black;
&:hover{
  transform: scale(1.05);
  border-radius: 5px 5px 0 0;
  z-index:1;
  overflow:visible; 
}
position:relative;

&:hover .cardTitle {
  display: none;
}

`;
