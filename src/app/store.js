import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice/counterSlice'

export const store = configureStore({ reducer: {
    counter: counterReducer
} });
