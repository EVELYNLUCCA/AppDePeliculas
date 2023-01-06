import styled from 'styled-components';

const ClassificationContainer = styled.div`
    position: absolute;
    width: 6%;
    height: 2%;
    bottom: 25%;
    right: 1px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    padding: 15px;
    border-left: solid 4px white;
    background-color: #45454590;
`

ClassificationContainer.defaultProps = {
    color: "black"
    
}

export default ClassificationContainer;