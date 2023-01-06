import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import TitleContainer from '../styles/TitleContainer';

const Title = (props) => {
    const text = props.title
    return (
            <TitleContainer>
                {text}
            </TitleContainer>
        
    );
};
export default Title;