import { configureStore } from '@reduxjs/toolkit';
import contatoreReducer from './slices/contatore';

export default configureStore({
    reducer: {
        contatore: contatoreReducer
    }
});