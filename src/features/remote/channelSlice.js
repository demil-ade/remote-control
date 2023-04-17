import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    count: 0
}

export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        constantone: (state) => {
            state.count = 1;
        },
        emptyone: (state) => {
            state.count = 0;
        },

        one: (state) => {
            state.count = 1;
        },
        two: (state) => {
            state.count = 2;
        },
        three: (state) => {
            state.count = 3;
        },
        four: (state) => {
            state.count = 4;
        },
        five: (state) => {
            state.count = 5;
        },
        six: (state) => {
            state.count = 6;
        },
        seven: (state) => {
            state.count = 7;
        },
        eight: (state) => {
            state.count = 8;
        },
        nine: (state) => {
            state.count = 9;
        },
    }
});
export const {constantone,emptyone,one, two, three, four, five, six, seven, eight, nine} = channelSlice.actions;

export default channelSlice.reducer;