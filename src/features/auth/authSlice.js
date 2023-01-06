import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
name: "auth", // ESTE NOMBRE ES CON EL QUE VOY A LLAMAR DESDE LA CONFIGURACIÓN DEL STORE
initialState: {
    isAuth: false,
    user: "",
    language: 1,
              },
reducers: { 
    setReduxUser: (state, action) => {
        const {user} = action.payload;
        state.isAuth = true;
        state.user = user;
    },
    logoutReduxUser: (state) => {
        state.isOpen = false;
    },
    languageRedux: (state, action) => {
        const {language} = action.payload;
        state.language = language;
       console.log("Cambie idioma");
    },
},
});


export const { setReduxUser, logoutReduxUser, languageRedux } = authSlice.actions

// Lo exporto para que lo tome el Store cuando configure
export default authSlice.reducer;