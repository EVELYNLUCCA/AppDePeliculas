import React from 'react'
import ButtonsContainer from '../styles/ButtonsContainer';
import ButtonRec from './ButtonRec';
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'

// Uso de redux
import { abrir, cerrar } from "../../cardModal/cardModalSlice";
import { useSelector, useDispatch } from 'react-redux';

const Buttons = (props) => {
    const dispatch = useDispatch();
    return (
        <ButtonsContainer>
            <ButtonRec icono={faPlay} color='black' background="#FFFFFF60" contenido='Reproducir' style={{marginLeft:"5px"}}/>
            <ButtonRec icono={faCircleInfo} color='white' background="#45454590" contenido ='Más información' style={{marginRight:"5px"}}/>
        </ButtonsContainer>
    );
};

export default Buttons;