import { createSlice } from "@reduxjs/toolkit";


const cardModalSlice = createSlice({
name: "cardModal", // ESTE NOMBRE ES CON EL QUE VOY A LLAMAR DESDE LA CONFIGURACIÓN DEL STORE
initialState: {
    isOpen: false,
    titleData: {
        id: 0,
        title: "",
        description: "",
        date: "",
        poster: "",
        backdrop: "",
        rating: 0,
        type: "",
        type2: "",
    },
                },
reducers: { 
    abrir: (state, action) => {
        state.isOpen = true;
        state.titleData = action.payload;
       // console.log("Comando abrir",action.payload);
    },
    cerrar: (state) => {
        state.isOpen = false;
       // console.log("Comando cerrar");
    },
},
});


export const { abrir, cerrar } = cardModalSlice.actions

// Lo exporto para que lo tome el Store cuando configure
export default cardModalSlice.reducer;


// formato datos 
// id: movie.id,
// title: movie.title,
// description: movie.overview,
// date: movie.release_date,
// poster: TMDB.images.poster_high + movie.poster_path,
// backdrop:TMDB.images.backdrop_high +  movie.backdrop_path,
// rating: movie.vote_average,
// type: 'PELÍCULA'