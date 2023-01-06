import React from 'react';
import ClassificationContainer from '../styles/ClasificationContainer';


const Clasification = ({ edad }) => {

    return (
        <ClassificationContainer>
            <p>{edad}+</p>
        </ClassificationContainer>


        
    );
};
export default Clasification;