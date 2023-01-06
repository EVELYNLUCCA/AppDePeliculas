import { configureStore } from '@reduxjs/toolkit'
import cardModalReducer from '../common/components/cardModal/cardModalSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    // Aca pueden ir muchos reducers debri del original
    cardModal: cardModalReducer,
    auth: authReducer,
  }, 
});

export default store;