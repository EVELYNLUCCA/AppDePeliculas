import React, { useContext } from "react";
import {TMDB}  from "../../../config/TMDB"
import DICC from "../../../common/diccionario/diccionario"
import AuthContext from "../../auth/AuthContext";

export const seriesAdapter = (series,language) => {
       // const { language } = useContext(AuthContext);
   // Si habilito Context muere todo, usar Redux
    return series.map((serie) => {
        return {
            id: serie.id,   
            title: serie.name,
            description: serie.overview,
            date: serie.first_air_date,
            backdrop: TMDB.images.backdrop_high + serie.backdrop_path,
            poster: serie.poster_path,
            rating: serie.vote_average, 
            type: DICC.adapterTmdb.serieType[language],
            type2: 'tv'
        }
    })
};

