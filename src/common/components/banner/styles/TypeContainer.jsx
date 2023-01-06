import styled from 'styled-components';

const TypeContainer = styled.div`
    width: 10%;
    height: 5%;
    position: relative;
    display: flex;
    justify-content: between-around;

    align-items: center;
    z-index: 10;
    margin-left: 25px;
;`

TypeContainer.defaultProps = {
    color: "black"
}

export default TypeContainer;