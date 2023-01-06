
import styled from 'styled-components';

export const ButtonRecContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 40px;
    padding: 0;
    border: none;
    margin: 5px;
    background:${(props) => props.background};
    :hover {
        cursor: pointer;
    }
`;

ButtonRecContainer.defaultProps = {
    color: "black"
}