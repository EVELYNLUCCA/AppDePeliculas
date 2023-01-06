import styled from 'styled-components';

const ButtonsContainer = styled.div`
    width: 50%;
    height: 15%;
    position: relative;
    justify-content: start;
    display: flex;
    flex-direction: row;
    left: 15px;
    margin-top: 10px;
`

ButtonsContainer.defaultProps = {
    color: "black"
}

export default ButtonsContainer;