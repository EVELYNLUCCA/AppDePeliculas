import React from 'react'
import TypeContainer from '../styles/TypeContainer';
import Logo2 from './Logo2';
import Text from './Text';

const Type = (props) => {

    return (
        
        <TypeContainer>
            <Logo2 />
            <Text type = {props.type}/>
        </TypeContainer>
    );
    
};
export default Type;