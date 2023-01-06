import React, { useContext } from "react";
import {TMDB}  from "../../../config/TMDB"
import DICC from "../../../common/diccionario/diccionario"
import AuthContext from "../../auth/AuthContext";
import { useSelector } from "react-redux";

export const moviesAdapter = (movies, language) => {
//const languageRedux = useSelector((state) => state.auth.language);
   // const { language } = useContext(AuthContext);
   // Si habilito Context o Redux muere todo!! VERIFICAR
    return movies.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            date: movie.release_date,
            poster: TMDB.images.poster_high + movie.poster_path,
            backdrop:TMDB.images.backdrop_high +  movie.backdrop_path,
            rating: movie.vote_average,
			type: DICC.adapterTmdb.movieType[language],
			type2: 'movie',
        }
    })
}

