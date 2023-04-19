import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    vol: 0
}

export const volumeSlice = createSlice({
    name: 'volume',
    initialState,
    reducers: {
        increase: (state) => {
            if(state.vol >= 0 && state.vol < 100){
                state.vol +=1;
            }
        },
        decrease: (state) => {
            if(state.vol >= 1 && state.vol <= 100){
                state.vol -=1;
            }
        },
        constant: (state) => {
            state.vol = 50;
        },
        empty: (state) => {
            state.vol = 0;
        }

    }
});

export const {increase, decrease, constant, empty} = volumeSlice.actions;

export default volumeSlice.reducer;