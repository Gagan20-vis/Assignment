import { configureStore } from "@reduxjs/toolkit";
import ShowReducer from '../Slice/MySlice'
export const store = configureStore({
    reducer: ShowReducer
})