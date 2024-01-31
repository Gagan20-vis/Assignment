import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    show: null
}
export const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {
        SET_SHOW : (state,action) => {
            state.show = action.payload
        }
    }
})
export const {
    SET_SHOW
} = showSlice.actions;
export default showSlice.reducer