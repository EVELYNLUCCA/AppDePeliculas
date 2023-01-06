import React from 'react';
import DescriptionContainer from '../styles/DescriptionContainer';



        const Description = (props) => {
        return (
            <DescriptionContainer>
            {props.overview}
            </DescriptionContainer>
    );
};
export default Description;