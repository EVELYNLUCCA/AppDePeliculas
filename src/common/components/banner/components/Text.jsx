import React from 'react'
import TextContainer from '../styles/TextContainer';

const Text = (props) => {

    return (
        
    <TextContainer> 
        <h2>{props.type}</h2>
    </TextContainer>
    );
};
export default Text;