import styled from 'styled-components';

const DescriptionContainer = styled.div`
    position: relative;
    display: flex;
    text-justify: auto;
    width: 50%;
    font-size: 20px;
    justify-content: start;
    margin-left: 2rem
    `

DescriptionContainer.defaultProps = {
    color: "black"
}

export default DescriptionContainer;